import type { Metadata } from "next";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  Gauge,
  Globe,
  Layers,
  Link2,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "DFY Prospecting — AI-Powered Outbound Lists | Daddy Leads",
  description:
    "Done-for-you outbound. We extract websites by ICP, score every lead, run 6-provider waterfall enrichment, and personalize with Claude AI. From $50 for 500 leads.",
};

const STEPS = [
  {
    n: "01",
    icon: <Globe className="size-5" />,
    title: "ICP-driven website extraction",
    body: "Send us your ICP. We map your total addressable market by domain — filtered by industry, revenue band, headcount, tech stack, and hiring intent. No stale lists, no random scraping.",
    output: "Targeted domain list",
  },
  {
    n: "02",
    icon: <Gauge className="size-5" />,
    title: "Lead scoring & qualification",
    body: "Every contact is scored across 12 dimensions — title relevance, seniority, decision-maker probability, role tenure, company maturity. Below threshold gets dropped before delivery.",
    output: "0–100 fit score per lead",
  },
  {
    n: "03",
    icon: <Layers className="size-5" />,
    title: "6-provider waterfall enrichment",
    body: "We cascade across Apollo, Hunter, Snov, Anymailfinder, Dropcontact, and our in-house hunter to maximize coverage. Every email is deliverability-scored. 98% catch rate.",
    output: "Verified work email + phone + LinkedIn",
  },
  {
    n: "04",
    icon: <Brain className="size-5" />,
    title: "Claude AI deep scoring + personalization",
    body: "Claude reads each prospect's LinkedIn, recent posts, company news, and tech stack — re-scores them on intent, then writes a one-line opener tailored to your offer.",
    output: "AI hook + intent tags",
  },
  {
    n: "05",
    icon: <Database className="size-5" />,
    title: "CRM-ready delivery",
    body: "Clean CSV — column-mapped to your CRM, sequencer, or sender. Direct sync to HubSpot, Salesforce, Smartlead, Instantly, Apollo, or Clay. Hit send the moment it lands.",
    output: "Ready-to-send CSV + CRM sync",
  },
];

const WHY = [
  {
    icon: <Brain className="size-5" />,
    title: "AI-personalized, not template-spammed",
    body: "Claude reads each prospect's LinkedIn, posts, and company news — then writes a unique one-line opener you'd actually be proud to send.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "6 providers, one delivery",
    body: "Most agencies use one enrichment source. We cascade through six and only deliver what passes verification — so your bounce rate stays under 2%.",
  },
  {
    icon: <Target className="size-5" />,
    title: "Scored before you ever see it",
    body: "Every lead is fit-scored before delivery. The bottom 30% never reaches your CSV — only contacts who actually match your ICP.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "No retainer · No minimums",
    body: "Pay per list. Start with 500. Scale to 25k+. Cancel any time — there's nothing to cancel.",
  },
];

const DELIVERABLES = [
  { icon: <Mail className="size-4" />, label: "Verified work email", note: "98% landing rate" },
  { icon: <Phone className="size-4" />, label: "Direct phone", note: "Mobile when available" },
  { icon: <Link2 className="size-4" />, label: "LinkedIn URL", note: "Verified active" },
  { icon: <Building2 className="size-4" />, label: "Title + seniority", note: "Normalized" },
  { icon: <Sparkles className="size-4" />, label: "Company + domain", note: "HQ, size, funding" },
  { icon: <Code2 className="size-4" />, label: "Tech stack tags", note: "200+ tools detected" },
  { icon: <Brain className="size-4" />, label: "Personalization hook", note: "Hand-crafted by Claude" },
  { icon: <Star className="size-4" />, label: "Fit score (0–100)", note: "AI-validated" },
  { icon: <TrendingUp className="size-4" />, label: "Intent signal", note: "Hiring · funding · expansion" },
  { icon: <MapPin className="size-4" />, label: "Geo + timezone", note: "City-level precision" },
];

const PACKAGES = [
  {
    name: "Starter",
    leads: "500 leads",
    price: "$50",
    perLead: "$0.10 / lead",
    note: "Test the engine. One ICP, one geo.",
    features: ["72-hour delivery", "Waterfall enrichment", "Claude personalization", "CRM-ready CSV"],
  },
  {
    name: "Growth",
    leads: "2,500 leads",
    price: "$199",
    perLead: "$0.08 / lead",
    note: "Where most teams start. Up to 3 ICP slices.",
    features: [
      "72-hour delivery",
      "Waterfall enrichment",
      "Claude personalization",
      "Direct CRM sync",
      "Intent signal flagging",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    leads: "10,000 leads",
    price: "$699",
    perLead: "$0.07 / lead",
    note: "Multi-segment outbound at volume.",
    features: [
      "5-day delivery",
      "Everything in Growth",
      "Multi-geo segmentation",
      "Branched personalization",
      "Private Slack channel",
    ],
  },
  {
    name: "Custom",
    leads: "25k+ leads",
    price: "Quote",
    perLead: "Custom volume rate",
    note: "Ongoing weekly delivery, dedicated researcher.",
    features: [
      "Custom SLA",
      "Dedicated researcher",
      "Weekly refreshed lists",
      "API access",
      "White-glove onboarding",
    ],
  },
];

const TRUST = [
  { icon: <Shield className="size-4" />, label: "GDPR + CCPA compliant" },
  { icon: <Clock className="size-4" />, label: "72-hour standard turnaround" },
  { icon: <ShieldCheck className="size-4" />, label: "95% deliverability or re-deliver" },
  { icon: <Zap className="size-4" />, label: "No retainer · No minimums" },
];

export default function DFYPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Done-for-you · AI personalization · 72-hour delivery"
          title={
            <>
              Outbound lists, <span className="gradient-text">built by Claude AI.</span>
            </>
          }
          sub="Send us your ICP. We extract the right websites, score every lead, run 6-provider waterfall enrichment, and personalize with Claude. CRM-ready in 72 hours. From $50."
        />

        {/* Hero CTAs */}
        <section className="-mt-6 pb-2">
          <div className="container-x flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button type="button" className="btn-primary btn-lg">
                Order Now
                <ArrowRight className="size-4" />
              </button>
              <a href="#pricing" className="btn-ghost btn-lg">
                See pricing
              </a>
            </div>
            <p className="text-xs text-[color:var(--color-ink-mute)]">
              Starts at $50 for 500 leads · 72-hour delivery · Cancel anytime
            </p>
          </div>
        </section>

        {/* trust strip */}
        <section className="pt-12 pb-6">
          <div className="container-x">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[color:var(--color-ink-muted)]">
              {TRUST.map((t) => (
                <div key={t.label} className="inline-flex items-center gap-2">
                  <span className="text-[color:var(--color-gold)]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20">
          <div className="container-x">
            <SectionHeader
              center
              kicker="How DFY Prospecting works"
              title="Five moves. Zero homework."
              sub="From your ICP to a CRM-ready list — in 72 hours, with Claude AI on every lead."
            />
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
              {STEPS.map((s) => (
                <article
                  key={s.n}
                  className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-[color:var(--color-line)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[color:var(--color-gold)]/40"
                >
                  <div
                    aria-hidden
                    className="absolute top-4 right-5 text-5xl font-extrabold text-[color:var(--color-gold)]/15 leading-none"
                  >
                    {s.n}
                  </div>
                  <div className="size-11 rounded-xl bg-gradient-to-br from-[color:var(--color-gold)]/20 to-[color:var(--color-gold)]/5 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/25">
                    {s.icon}
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold leading-tight pr-8 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-[color:var(--color-ink-muted)] leading-relaxed">
                    {s.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[color:var(--color-line)] flex items-start gap-2 text-[11px] font-semibold tracking-wide uppercase text-[color:var(--color-gold)]">
                    <CheckCircle2 className="size-3.5 shrink-0 mt-0.5" />
                    <span className="leading-snug">{s.output}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why different */}
        <section className="py-20 bg-gradient-to-b from-[color:var(--color-page)] to-white">
          <div className="container-x">
            <SectionHeader
              center
              kicker="Why this is different"
              title="Built for outbound that actually converts."
              sub="Most lead lists ship with one provider, no scoring, and templated personalization. Ours does the opposite."
            />
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="card flex gap-5 items-start transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="size-12 shrink-0 rounded-xl bg-gradient-to-br from-[color:var(--color-gold)]/20 to-[color:var(--color-gold)]/5 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/25">
                    {w.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{w.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-20">
          <div className="container-x">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
              <SectionHeader
                kicker="What's in every row"
                title="Ten data points per lead."
                sub="Not three. Every row is scored, enriched, and personalized — ready to drop into your sender."
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {DELIVERABLES.map((d) => (
                  <div key={d.label} className="card !p-4 flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/25 shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{d.label}</div>
                      <div className="text-xs text-[color:var(--color-ink-muted)] mt-0.5">
                        {d.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 scroll-mt-20">
          <div className="container-x">
            <SectionHeader
              center
              kicker="Pricing"
              title="Pay per list. No retainer."
              sub="Start with 500 leads at $50. Scale when it works. Volume discounts kick in automatically."
            />
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PACKAGES.map((p) => (
                <article
                  key={p.name}
                  className={`relative rounded-2xl bg-white p-6 flex flex-col transition-all duration-300 ${
                    p.highlight
                      ? "ring-2 ring-[color:var(--color-gold)] shadow-2xl shadow-[color:var(--color-gold)]/15 lg:-translate-y-2"
                      : "ring-1 ring-[color:var(--color-line)] hover:-translate-y-1 hover:shadow-xl hover:ring-[color:var(--color-gold)]/30"
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-[color:var(--color-gold)] to-amber-500 text-white shadow-md whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-lg font-bold tracking-tight">{p.name}</div>
                  <div className="text-xs text-[color:var(--color-gold)] mt-1 uppercase tracking-widest font-bold">
                    {p.leads}
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-[color:var(--color-ink)]">
                      {p.price}
                    </span>
                    {p.price !== "Quote" && (
                      <span className="text-xs text-[color:var(--color-ink-mute)]">one-time</span>
                    )}
                  </div>
                  <div className="text-xs text-[color:var(--color-ink-mute)] mt-1">{p.perLead}</div>
                  <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] min-h-12">
                    {p.note}
                  </p>
                  <ul className="mt-5 space-y-2 text-[13px] flex-1">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-[color:var(--color-gold)] shrink-0 mt-0.5" />
                        <span className="text-[color:var(--color-ink)]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-6 w-full justify-center ${
                      p.highlight ? "btn-primary" : "btn-ghost"
                    }`}
                  >
                    Order Now
                    <ArrowRight className="size-4" />
                  </button>
                </article>
              ))}
            </div>

            {/* Below-pricing Order Now mega CTA */}
            <div className="mt-16">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a0f2e] via-[#2a1845] to-[#1a0f2e] p-10 md:p-14 text-center">
                <div
                  aria-hidden
                  className="absolute -top-20 -left-20 size-72 rounded-full blur-3xl bg-[color:var(--color-gold)]/30"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-20 -right-20 size-72 rounded-full blur-3xl bg-[color:var(--color-gold)]/20"
                />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--color-gold)]/20 text-[color:var(--color-gold)] text-[11px] font-bold tracking-widest uppercase ring-1 ring-[color:var(--color-gold)]/30">
                    <Sparkles className="size-3.5" />
                    Ready to scale outbound
                  </div>
                  <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-white text-balance leading-tight">
                    Get 500 qualified, scored, personalized leads — for $50.
                  </h2>
                  <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto">
                    72-hour delivery. CRM-ready. No retainer. If we don&apos;t hit 95%
                    deliverability, we re-deliver.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <button type="button" className="btn-primary btn-lg">
                      Order Now
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-white/50">
                    Quote within 4 hours · Delivery within 72 · Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container-x max-w-3xl text-center">
            <div className="kicker">A founder said</div>
            <blockquote className="mt-4 text-2xl md:text-3xl font-bold leading-snug text-balance">
              &ldquo;Got 1,000 qualified leads in 56 hours. 12 meetings booked from the first
              sequence.{" "}
              <span className="text-[color:var(--color-gold)]">
                Replaced our 2-person SDR research team.
              </span>
              &rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--color-gold)] to-amber-500" />
              <div className="text-left">
                <div className="text-sm font-semibold">Tariq Mahmood</div>
                <div className="text-xs text-[color:var(--color-gold)]">
                  Head of Growth · Steadyhand
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
