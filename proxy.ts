import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Paths that live on the dashboard subdomain but don't require auth
// (the auth pages themselves).
const AUTH_PATHS = ["/signup", "/login", "/sso-callback"];
const isAuthPath = (path: string) =>
  AUTH_PATHS.some((p) => path === p || path.startsWith(`${p}/`));

// Protected routes on the main domain (if anything still resolves there).
const isProtected = createRouteMatcher(["/dashboard(.*)", "/account(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  const isDashboardHost =
    host.startsWith("dashboard.") || host.startsWith("app.");

  // ─── On dashboard.* — host the app + auth pages ───
  if (isDashboardHost) {
    // Auth pages: serve as-is, no rewrite, no auth check.
    if (isAuthPath(url.pathname)) return;

    // Everything else on the dashboard subdomain requires auth + maps to /dashboard/*.
    await auth.protect();

    // Clean URL trick: dashboard.host/dashboard/foo → redirect to dashboard.host/foo
    if (url.pathname === "/dashboard") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    if (url.pathname.startsWith("/dashboard/")) {
      url.pathname = url.pathname.replace(/^\/dashboard/, "");
      return NextResponse.redirect(url);
    }

    // Internally rewrite dashboard.host/foo → /dashboard/foo
    if (!url.pathname.startsWith("/dashboard")) {
      url.pathname =
        url.pathname === "/" ? "/dashboard" : `/dashboard${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    return;
  }

  // ─── On the main domain — bounce auth + dashboard traffic to the subdomain ───
  const shouldBounce =
    isAuthPath(url.pathname) || url.pathname.startsWith("/dashboard");

  if (shouldBounce) {
    const proto = req.nextUrl.protocol; // "http:" or "https:"
    // Strip any "/dashboard" prefix when sending the user to the subdomain root.
    const targetPath =
      url.pathname === "/dashboard"
        ? "/"
        : url.pathname.startsWith("/dashboard/")
        ? url.pathname.replace(/^\/dashboard/, "")
        : url.pathname;
    const target = new URL(
      `${proto}//dashboard.${host}${targetPath}${url.search}`
    );
    return NextResponse.redirect(target);
  }

  // Anything else still requiring auth (just in case)
  if (isProtected(req)) await auth.protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
