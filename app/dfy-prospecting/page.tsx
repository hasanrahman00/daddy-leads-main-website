import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Handshake,
  Send,
  Clock,
  Shield,
  ShieldCheck,
  Sparkles,
  Mail,
  Building2,
  Link2,
  MapPin,
  Code2,
  Check,
} from "lucide-react";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero, SectionHeader, StatsCTA } from "@/components/ui";
import { ICPForm } from "./ICPForm";

export const metadata: Metadata = {
  title: "DFY Prospecting — Daddy Leads",
  description:
    "Send us your ICP. We hand back a verified, enriched, ready-to-send lead list in 72 hours.",
};

const STEPS = [
  {
    n: "01",
    icon: <Target className="size-5" />,
    title: "Brief us on your ICP",
    body: "Fill the form below or hop on a 15-min call. We capture industries, titles, geos, company size, intent signals, and the personalization angles that actually matter.",
    note: "Avg. brief takes 6 minutes.",
  },
  {
    n: "02",
    icon: <Handshake className="size-5" />,
    title: "We hunt, verify, and enrich",
    body: "Our team runs the scrape, 6-provider verification, and full enrichment pass. Every lead gets deliverability scored and tagged with intent signals.",
    note: "72-hour standard. 48h rush available.",
  },
  {
    n: "03",
    icon: <Send className="size-5" />,
    title: "Hit send and watch replies land",
    body: "Delivered as a clean CSV and synced straight into your Daddy Leads account. Load it into a sequence and start sending — or hand it to your AE.",
    note: "Free re-verification at 30 days.",
  },
];

const DELIVERABLES = [
  { icon: <Mail className="size-4" />, label: "Verified work email", note: "98%+ landing rate" },
  { icon: <Building2 className="size-4" />, label: "Job title + seniority", note: "Normalized" },
  { icon: <Sparkles className="size-4" />, label: "Company + domain", note: "Headcount + funding" },
  { icon: <Link2 className="size-4" />, label: "LinkedIn URL", note: "Verified active" },
  { icon: <Check className="size-4" />, label: "Personalization hook", note: "1 per lead, hand-written" },
  { icon: <ShieldCheck className="size-4" />, label: "Intent signal", note: "Hiring / funding / tech" },
  { icon: <MapPin className="size-4" />, label: "Geo + timezone", note: "City-level" },
  { icon: <Code2 className="size-4" />, label: "Tech stack tags", note: "200+ tools detected" },
];

const PACKAGES = [
  { name: "Starter", leads: "250 leads", price: "$499", note: "Test the water. One ICP, one geo.", turnaround: "72 hours" },
  { name: "Growth", leads: "1,000 leads", price: "$1,499", note: "Most popular. Up to 3 ICP slices.", turnaround: "72 hours", highlight: true },
  { name: "Scale", leads: "5,000 leads", price: "$4,999", note: "Multi-segment, multi-geo, branched personalization.", turnaround: "5 business days" },
  { name: "Custom", leads: "10k+", price: "Quote", note: "Ongoing weekly delivery, dedicated researcher.", turnaround: "Custom SLA" },
];

const TRUST = [
  { icon: <Shield className="size-4" />, label: "GDPR + CCPA compliant" },
  { icon: <Clock className="size-4" />, label: "72h standard turnaround" },
  { icon: <ShieldCheck className="size-4" />, label: "95% deliverability or re-deliver" },
  { icon: <Check className="size-4" />, label: "No retainer. No minimums." },
];

export default function DFYPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Done-for-you · 72-hour turnaround"
          title={
            <>
              Skip the build. <span className="gradient-text">Get the list.</span>
            </>
          }
          sub="Send us your ICP. We hand back a verified, enriched, ready-to-send lead list in 72 hours. You hit send — the boomerang comes back."
        />

        {/* trust strip */}
        <section className="-mt-2 pb-6">
          <div className="container-x">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[color:var(--color-ink-muted)]">
              {TRUST.map((t) => (
                <div key={t.label} className="inline-flex items-center gap-2">
                  <span className="text-[color:var(--color-brand)]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* how DFY works */}
        <section className="py-20">
          <div className="container-x">
            <SectionHeader
              center
              kicker="How DFY works"
              title="Three moves. No homework."
              sub="The fastest path from 'I need leads' to 'they're in my inbox'."
            />
            <div className="mt-14 grid md:grid-cols-3 gap-5">
              {STEPS.map((s) => (
                <article key={s.n} className="card relative">
                  <div
                    aria-hidden
                    className="absolute top-4 right-5 text-5xl font-extrabold text-[color:var(--color-gold)]/15 leading-none"
                  >
                    {s.n}
                  </div>
                  <div className="size-11 rounded-full bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/25">
                    {s.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold pr-12">{s.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                    {s.body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs text-[color:var(--color-brand)] font-medium">
                    <Clock className="size-3.5" />
                    {s.note}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* what you get */}
        <section className="py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
              <SectionHeader
                kicker="What you get"
                title="Every lead lands ready to send."
                sub="Eight data points per lead, not three. Verified by humans plus six providers. Delivered as CSV and synced straight into your Daddy Leads account."
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {DELIVERABLES.map((d) => (
                  <div key={d.label} className="card !p-4 flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/25 shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{d.label}</div>
                      <div className="text-xs text-[color:var(--color-ink-muted)] mt-0.5">{d.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* packages */}
        <section className="py-20">
          <div className="container-x">
            <SectionHeader
              center
              kicker="Packages"
              title="Pick a size."
              sub="One-time delivery, no retainer. Need ongoing? Custom packages start at 2k leads/week."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PACKAGES.map((p) => (
                <article
                  key={p.name}
                  className={`relative card transition ${
                    p.highlight
                      ? "ring-2 ring-[color:var(--color-brand)] shadow-card-lg -translate-y-1"
                      : "hover:shadow-card-lg"
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-[color:var(--color-brand)] text-white">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-lg font-bold">{p.name}</div>
                  <div className="text-xs text-[color:var(--color-brand)] mt-1 uppercase tracking-widest font-semibold">
                    {p.leads}
                  </div>
                  <div className="mt-6 text-4xl font-extrabold">{p.price}</div>
                  <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] min-h-12">{p.note}</p>
                  <div className="mt-5 pt-5 border-t border-[color:var(--color-line)] flex items-center gap-2 text-xs text-[color:var(--color-ink-muted)]">
                    <Clock className="size-3.5 text-[color:var(--color-brand)]" />
                    {p.turnaround}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center text-xs text-[color:var(--color-ink-muted)]">
              Submit the brief below for a firm quote — usually back within 4 hours.
            </div>
          </div>
        </section>

        {/* THE FORM */}
        <section id="brief" className="py-24 scroll-mt-20">
          <div className="container-x max-w-4xl">
            <SectionHeader
              center
              kicker="The brief"
              title="Send us your ICP."
              sub="Six minutes. No card. We quote within 4 hours, deliver within 72."
            />
            <div className="mt-12">
              <ICPForm />
            </div>
          </div>
        </section>

        {/* testimonial */}
        <section className="py-20">
          <div className="container-x max-w-3xl text-center">
            <div className="kicker">A founder said</div>
            <blockquote className="mt-4 text-2xl md:text-3xl font-bold leading-snug text-balance">
              &ldquo;Got our first 1,000 leads in 56 hours. 12 meetings booked from the first sequence.{" "}
              <span className="text-[color:var(--color-brand)]">Replaced our 2-person SDR research team.</span>&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-purple-glow)]" />
              <div className="text-left">
                <div className="text-sm font-semibold">Tariq Mahmood</div>
                <div className="text-xs text-[color:var(--color-brand)]">Head of Growth · Steadyhand</div>
              </div>
            </div>
          </div>
        </section>

        {/* end CTA */}
        <section className="py-16">
          <div className="container-x">
            <div className="card max-w-3xl mx-auto text-center !p-10">
              <div className="kicker">Skip the build</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-balance">
                Send the ICP. We&apos;ll send back the list.
              </h2>
              <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                No retainer. No minimums. Quote in 4 hours, delivery in 72.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="#brief" className="btn-primary btn-lg">
                  Send my ICP
                  <ArrowRight className="size-4" />
                </Link>
                <Link href="/#features" className="btn-ghost btn-lg">
                  Or see all features
                </Link>
              </div>
            </div>
          </div>
        </section>

        <StatsCTA />
      </main>
      <Footer />
    </>
  );
}
