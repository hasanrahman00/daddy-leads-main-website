import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { Logo } from "./ui";

const LINKS = [
  { href: "/", label: "Bulk Export" },
  { href: "/dfy-prospecting", label: "DFY Prospecting" },
  { href: "/free-list", label: "Free List" },
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
            <button
              type="button"
              className="hidden sm:inline text-sm text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] font-medium"
            >
              Dashboard
            </button>
            <UserButton appearance={{ elements: { avatarBox: "size-9" } }} />
          </Show>
          <Show when="signed-out">
            <button type="button" className="btn-primary">
              Order Now
            </button>
          </Show>
        </div>
      </div>
    </header>
  );
}
