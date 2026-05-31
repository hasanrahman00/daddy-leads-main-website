import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./ui";

/* Inline brand glyphs — lucide-react no longer ships these (trademark) */
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2H21.5l-7.42 8.48L23 22h-6.79l-5.32-6.96L4.8 22H1.54l7.94-9.07L1 2h6.95l4.81 6.37L18.244 2Zm-2.38 18h1.88L7.22 4H5.23l10.63 16Z" />
  </svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.27-.01-1.18-.02-2.14-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55 4.57-1.52 7.85-5.83 7.85-10.9C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.38.48A3 3 0 0 0 .5 6.2C.02 8 .02 12 .02 12s0 4 .48 5.8a3 3 0 0 0 2.12 2.12C4.4 20.4 12 20.4 12 20.4s7.6 0 9.38-.48a3 3 0 0 0 2.12-2.12C24 16 24 12 24 12s0-4-.5-5.8ZM9.6 15.6V8.4l6.27 3.6L9.6 15.6Z" />
  </svg>
);

const SOCIALS = [
  { label: "Twitter", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "GitHub", href: "#", Icon: GitHubIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
];

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
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="size-9 grid place-items-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-muted)] hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] hover:-translate-y-0.5 transition"
                >
                  <Icon className="size-4" />
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
