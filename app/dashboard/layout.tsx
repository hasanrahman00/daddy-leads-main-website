import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardShell } from "./_components/DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side auth guard — runs on every dashboard request.
  // The proxy.ts middleware also enforces this; this is the belt to the suspenders.
  const { userId } = await auth();
  if (!userId) redirect("/login");

  return <DashboardShell>{children}</DashboardShell>;
}
