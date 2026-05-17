import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-white">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <Logo size="lg" />
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] max-w-sm">
              Verified B2B leads from LinkedIn, Apollo, Maps and 8+ sources — exported
              in one click. Built for founders who&apos;d rather close than configure.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["X", "in", "GH", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="size-8 grid place-items-center rounded-full border border-[color:var(--color-line)] text-xs text-[color:var(--color-ink-muted)] hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="kicker">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-[color:var(--color-brand)] mt-0.5 shrink-0" />
                47 W 13th St, New York, NY 10011, USA
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-[color:var(--color-brand)] shrink-0" />
                +1 620-630-2762
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-[color:var(--color-brand)] shrink-0" />
                <a href="mailto:contact@daddy-leads.com" className="hover:text-[color:var(--color-ink)]">
                  contact@daddy-leads.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="kicker">Legal</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/affiliate" className="text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/dfy-prospecting" className="text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]">
                  DFY Prospecting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--color-line)] flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--color-ink-muted)]">
          <div>© 2026 Daddy Leads. All rights reserved.</div>
          <div className="font-mono tracking-widest">DXL · EST. 2022</div>
        </div>
      </div>
    </footer>
  );
}
