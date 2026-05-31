import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { Logo } from "./ui";

const LINKS = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/affiliate", label: "Affiliate" },
  { href: "/#testimonials", label: "Testimonials" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[color:var(--color-line)]">
      <div className="container-x h-16 flex items-center justify-between">
        <Link href="/" aria-label="Daddy Leads home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[color:var(--color-ink-muted)]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[color:var(--color-ink)] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="hidden sm:inline text-sm text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] font-medium"
            >
              Dashboard
            </Link>
            <UserButton appearance={{ elements: { avatarBox: "size-9" } }} />
          </Show>
        </div>
      </div>
    </header>
  );
}
