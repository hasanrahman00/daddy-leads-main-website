import Link from "next/link";
import {
  ArrowRight,
  Star,
  Inbox,
  Mail,
  Send,
  BarChart3,
  Users,
  UserCircle2,
  Bell,
  Sparkles,
  Plus,
} from "lucide-react";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionHeader, Kicker, StatsCTA } from "@/components/ui";
import { HomeFAQ } from "./_home/HomeFAQ";
import { CalEmbed } from "./_home/CalEmbed";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <FeatureGrid />
        <Booking />
        <HomeFAQ />
        <StatsCTA />
      </main>
      <Footer />
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
      <div aria-hidden className="absolute inset-0 brand-glow pointer-events-none" />

      <div className="container-x relative pt-16 md:pt-24 pb-12 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance">
          &ldquo;We make <span className="gradient-text">lead scraping</span>
          <br className="hidden sm:block" /> f**cking easy&rdquo;
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[color:var(--color-ink-muted)] text-pretty">
          Verified B2B leads from LinkedIn, Apollo, Maps and 8+ sources exported in one click.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4">
          <Link href="/signup" className="btn-primary btn-lg">
            Get 100 Free Leads
            <ArrowRight className="size-4" />
          </Link>
          <p className="text-xs text-[color:var(--color-ink-mute)]">
            No credit card · 2,400+ founders shipping outbound · Cancel any time
          </p>
        </div>

        {/* Trust strip — social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="inline-flex items-center gap-2">
            <span className="text-base">⭐</span>
            <span className="text-[color:var(--color-ink-muted)]">
              Trusted by <strong className="text-[color:var(--color-ink)]">2,400+</strong> founders
            </span>
          </div>
          <div className="hidden sm:block size-1 rounded-full bg-[color:var(--color-line-strong)]" />
          <div className="inline-flex items-center gap-2">
            <span className="text-base">✉️</span>
            <span className="text-[color:var(--color-ink-muted)]">
              <strong className="text-[color:var(--color-ink)]">98.7%</strong> deliverability
            </span>
          </div>
          <div className="hidden sm:block size-1 rounded-full bg-[color:var(--color-line-strong)]" />
          <div className="inline-flex items-center gap-2">
            <span className="text-base">⚡</span>
            <span className="text-[color:var(--color-ink-muted)]">
              <strong className="text-[color:var(--color-ink)]">1.2M</strong> leads scraped this month
            </span>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <AppMockup />
        </div>
      </div>
    </section>
  );
}

function AppMockup() {
  const sidebar = [
    { icon: <Inbox className="size-4" />, label: "Inbox" },
    { icon: <Mail className="size-4" />, label: "Mailboxes" },
    { icon: <BarChart3 className="size-4" />, label: "Reports", children: [
      { label: "Apollo", active: true },
      { label: "Crunchbase" },
      { label: "Sales Navigator" },
      { label: "Creator Followers" },
    ] },
    { icon: <Send className="size-4" />, label: "Sequences" },
    { icon: <Users className="size-4" />, label: "Team" },
  ];

  return (
    <div className="relative mx-auto max-w-5xl text-left">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-brand)]/10 via-[color:var(--color-purple-glow)]/15 to-transparent blur-2xl"
      />
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-card-lg overflow-hidden">
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-[#FAFAFC]">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-[#FF5F57]" />
            <div className="size-3 rounded-full bg-[#FEBC2E]" />
            <div className="size-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 max-w-md mx-auto">
            <div className="rounded-md bg-white border border-gray-200 text-[11px] text-gray-500 text-center py-1 font-mono">
              app.daddyleads.io/reports/apollo
            </div>
          </div>
          <div className="size-6" />
        </div>

        <div className="grid grid-cols-12 min-h-[420px]">
          {/* sidebar */}
          <aside className="col-span-3 border-r border-gray-200 bg-[#FBFBFD] p-3 text-gray-900">
            <div className="px-2 py-2 flex items-center gap-2">
              <div className="size-7 rounded-lg bg-gradient-to-br from-[color:var(--color-gold-2)] to-[color:var(--color-gold)] grid place-items-center text-[color:var(--color-black)] text-[10px] font-extrabold">DL</div>
              <div className="text-sm font-semibold">daddyleads</div>
            </div>
            <ul className="mt-3 space-y-1">
              {sidebar.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-500 hover:bg-white">
                    <span className="text-gray-400">{item.icon}</span>
                    {item.label}
                  </div>
                  {item.children && (
                    <ul className="pl-7 space-y-0.5 mt-0.5">
                      {item.children.map((c) => (
                        <li
                          key={c.label}
                          className={`px-2 py-1 rounded-md text-xs ${
                            c.active
                              ? "bg-purple-50 text-purple-700 font-medium"
                              : "text-gray-500 hover:bg-white"
                          }`}
                        >
                          {c.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* main panel */}
          <div className="col-span-9 p-6 text-gray-900">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-600">
                  Reports / Apollo
                </div>
                <h3 className="mt-1 text-xl font-bold">Apollo — Export verified leads</h3>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="size-4 text-gray-400" />
                <UserCircle2 className="size-6 text-gray-400" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs text-gray-500">Leads exported</div>
                <div className="mt-1 text-2xl font-bold">12,480</div>
                <div className="mt-1 text-[10px] text-emerald-600 font-semibold">+842 this week</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs text-gray-500">Avg. accuracy</div>
                <div className="mt-1 text-2xl font-bold">98.7%</div>
                <div className="mt-1 text-[10px] text-purple-600 font-semibold">↑ from 96.3%</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs text-gray-500">Open searches</div>
                <div className="mt-1 text-2xl font-bold">3</div>
                <div className="mt-1 text-[10px] text-gray-500 font-semibold">2 running</div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl border-2 border-dashed border-gray-200 hover:border-purple-400 bg-[#FBFBFD] hover:bg-purple-50/40 p-8 text-center transition group">
              <div className="mx-auto size-10 rounded-full bg-purple-100 grid place-items-center text-purple-700 group-hover:bg-white">
                <Plus className="size-5" />
              </div>
              <div className="mt-3 text-sm font-medium text-gray-900">
                Add an Apollo search URL
              </div>
              <div className="text-xs text-gray-500 mt-1">
                We&apos;ll scrape, verify, and enrich every lead.
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      emoji: "🎯",
      title: "Pick your source",
      body: "Apollo, Sales Navigator, Crunchbase, Maps, X followers, or a CSV. Drop in a URL or upload — we handle the rest.",
    },
    {
      n: "02",
      emoji: "🎚️",
      title: "Set your filters",
      body: "Industry, title, geography, headcount, intent signals. The sharper the ICP, the warmer the leads.",
    },
    {
      n: "03",
      emoji: "📤",
      title: "Export & enrich",
      body: "One click. Verified emails, mobile dials, LinkedIn URLs, and personalization hooks — straight into your stack.",
    },
  ];
  return (
    <section id="how-it-works" className="py-20">
      <div className="container-x">
        <SectionHeader
          center
          kicker="How it works"
          title="From query to qualified leads in three steps."
          sub="No engineering, no scraper babysitting, no spreadsheet duct-tape."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group card card-hover relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 size-40 rounded-full bg-[color:var(--color-gold)]/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="text-4xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  aria-hidden
                >
                  {s.emoji}
                </span>
                <span className="font-display tracking-[0.18em] text-xs text-[color:var(--color-gold)]">
                  Step {s.n}
                </span>
              </div>
              <h3 className="relative mt-5 text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="relative mt-2 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                {s.body}
              </p>
              <div
                aria-hidden
                className="absolute bottom-3 right-4 font-display text-7xl text-[color:var(--color-gold)]/12 leading-none select-none"
              >
                {s.n}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FEATURE GRID ───────────────────────── */

type Tone = "sky" | "amber" | "violet" | "emerald" | "rose" | "indigo" | "teal" | "blue" | "fuchsia" | "lime" | "orange";

const TONE: Record<Tone, { icon: string; halo: string; shadow: string; ring: string; accent: string }> = {
  sky:     { icon: "bg-gradient-to-br from-sky-100 to-sky-50 text-sky-600 ring-sky-200/70",                 halo: "bg-sky-300/40",     shadow: "group-hover:shadow-sky-200/50",     ring: "group-hover:ring-sky-300/70",     accent: "from-sky-400 via-sky-500 to-sky-400" },
  amber:   { icon: "bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 ring-amber-200/70",          halo: "bg-amber-300/40",   shadow: "group-hover:shadow-amber-200/50",   ring: "group-hover:ring-amber-300/70",   accent: "from-amber-400 via-amber-500 to-amber-400" },
  violet:  { icon: "bg-gradient-to-br from-violet-100 to-violet-50 text-violet-600 ring-violet-200/70",       halo: "bg-violet-300/40",  shadow: "group-hover:shadow-violet-200/50",  ring: "group-hover:ring-violet-300/70",  accent: "from-violet-400 via-violet-500 to-violet-400" },
  emerald: { icon: "bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-700 ring-emerald-200/70",   halo: "bg-emerald-300/40", shadow: "group-hover:shadow-emerald-200/50", ring: "group-hover:ring-emerald-300/70", accent: "from-emerald-400 via-emerald-500 to-emerald-400" },
  rose:    { icon: "bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 ring-rose-200/70",              halo: "bg-rose-300/40",    shadow: "group-hover:shadow-rose-200/50",    ring: "group-hover:ring-rose-300/70",    accent: "from-rose-400 via-rose-500 to-rose-400" },
  indigo:  { icon: "bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600 ring-indigo-200/70",       halo: "bg-indigo-300/40",  shadow: "group-hover:shadow-indigo-200/50",  ring: "group-hover:ring-indigo-300/70",  accent: "from-indigo-400 via-indigo-500 to-indigo-400" },
  teal:    { icon: "bg-gradient-to-br from-teal-100 to-teal-50 text-teal-700 ring-teal-200/70",              halo: "bg-teal-300/40",    shadow: "group-hover:shadow-teal-200/50",    ring: "group-hover:ring-teal-300/70",    accent: "from-teal-400 via-teal-500 to-teal-400" },
  blue:    { icon: "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 ring-blue-200/70",              halo: "bg-blue-300/40",    shadow: "group-hover:shadow-blue-200/50",    ring: "group-hover:ring-blue-300/70",    accent: "from-blue-400 via-blue-500 to-blue-400" },
  fuchsia: { icon: "bg-gradient-to-br from-fuchsia-100 to-fuchsia-50 text-fuchsia-600 ring-fuchsia-200/70",   halo: "bg-fuchsia-300/40", shadow: "group-hover:shadow-fuchsia-200/50", ring: "group-hover:ring-fuchsia-300/70", accent: "from-fuchsia-400 via-fuchsia-500 to-fuchsia-400" },
  lime:    { icon: "bg-gradient-to-br from-lime-100 to-lime-50 text-lime-700 ring-lime-200/70",              halo: "bg-lime-300/40",    shadow: "group-hover:shadow-lime-200/50",    ring: "group-hover:ring-lime-300/70",    accent: "from-lime-400 via-lime-500 to-lime-400" },
  orange:  { icon: "bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 ring-orange-200/70",       halo: "bg-orange-300/40",  shadow: "group-hover:shadow-orange-200/50",  ring: "group-hover:ring-orange-300/70",  accent: "from-orange-400 via-orange-500 to-orange-400" },
};

type Feature = {
  emoji: string;
  tone: Tone;
  title: string;
  body: string;
  price: string;
  badge?: "POPULAR" | "NEW" | "CUSTOM" | "HOT";
};

const BADGE_STYLE: Record<NonNullable<Feature["badge"]>, string> = {
  POPULAR: "bg-gradient-to-r from-[color:var(--color-gold)] to-[color:var(--color-gold-2)] text-white",
  NEW:     "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white",
  CUSTOM:  "bg-gradient-to-r from-[color:var(--color-purple)] to-[color:var(--color-purple-2)] text-white",
  HOT:     "bg-gradient-to-r from-rose-500 to-orange-400 text-white",
};

function FeatureGrid() {
  const features: Feature[] = [
    // ─── Tier 1 · Most popular ───
    { emoji: "💼", tone: "sky",     badge: "POPULAR", title: "Export Sales Navigator", body: "Scrape Sales Nav at scale without restricting your account.", price: "$3 / 1k rows" },
    { emoji: "🌊", tone: "sky",                       title: "Waterfall Enrichment",   body: "8+ sources cascade to find verified emails for every row.", price: "$15 / 1k emails" },
    { emoji: "🚀", tone: "amber",   badge: "HOT",     title: "Export Apollo",          body: "Bulk export directly from your Apollo search filters.",    price: "$3 / 1k emails" },
    { emoji: "🔗", tone: "sky",                       title: "LinkedIn URL Enrich",    body: "CSV of LinkedIn URLs → verified emails, titles, contacts.", price: "$5 / 1k profiles" },

    // ─── Tier 2 · High demand ───
    { emoji: "📞", tone: "violet",                    title: "Direct Dials",           body: "Accurate direct phone numbers from 5+ trusted sources.",    price: "$100 / 1k numbers" },
    { emoji: "🌐", tone: "blue",    badge: "NEW",     title: "Enrich Domain",          body: "Drop a domain. Get decision-makers, verified emails, and tech stack in seconds.", price: "$6 / 1k domains" },
    { emoji: "🥷", tone: "sky",                       title: "Competitor Followers",   body: "Scrape a competitor's audience — pre-qualified intent.",    price: "$3.5 / 1k followers" },
    { emoji: "📍", tone: "rose",                      title: "Local Leads Scraping",   body: "Google Maps, Yelp, local directories. Phone, email, address, hours — verified.", price: "$5 / 1k businesses" },

    // ─── Tier 3 · Provider exports ───
    { emoji: "✉️", tone: "teal",                      title: "ContactOut Leads",       body: "Verified emails + phones from LinkedIn at scale.",          price: "$4 / 1k leads" },
    { emoji: "💎", tone: "rose",                      title: "Lusha Leads",            body: "Bulk export Lusha contacts with built-in verification.",    price: "$5 / 1k contacts" },
    { emoji: "🎣", tone: "lime",                      title: "Prospeo Leads",          body: "Prospeo exports in bulk. Find emails from LinkedIn fast.",  price: "$4 / 1k leads" },
    { emoji: "🧙", tone: "indigo",                    title: "Wiza Leads",             body: "Wiza exports made bulk-friendly. No manual clicks.",        price: "$4 / 1k leads" },

    // ─── Tier 4 · Specialty & niche ───
    { emoji: "🛍️", tone: "orange",                    title: "Ecommerce Leads",        body: "Verified Shopify and BigCommerce merchants + Klaviyo status.", price: "$8 / 1k stores" },
    { emoji: "📊", tone: "emerald",                   title: "Zoominfo Leads",         body: "Export Zoominfo searches without burning credits.",         price: "$4 / 1k leads" },
    { emoji: "💰", tone: "blue",                      title: "Export Crunchbase",      body: "Funded companies, founders, hiring spikes — direct.",       price: "$4 / 1k rows" },
    { emoji: "💬", tone: "emerald", badge: "NEW",     title: "WhatsApp Numbers",       body: "WhatsApp-verified mobile numbers for international outbound.", price: "$15 / 1k numbers" },

    // ─── Tier 5 · Add-ons & monitoring ───
    { emoji: "📦", tone: "fuchsia",                   title: "DFY Leads",              body: "Pre-built lead packs across 50+ verticals. Download instantly.", price: "From $99 / pack" },
    { emoji: "🔔", tone: "amber",                     title: "Keywords Monitoring",    body: "Track keywords across LinkedIn, X, Reddit. Never miss a signal.", price: "$6 / keyword" },
    { emoji: "👤", tone: "emerald",                   title: "Avatars",                body: "Vetted outreach agents with ID-verified social profiles.",   price: "From $59" },

    // ─── Tier 6 · Custom build ───
    { emoji: "🤖", tone: "violet",  badge: "CUSTOM",  title: "AI Agents & Automation", body: "Custom AI agents and outbound automations built for your stack. Research bots, workflows, integrations.", price: "From $1,999" },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container-x">
        <SectionHeader
          center
          kicker="Features"
          title="Multiple ways to fill your pipeline."
          sub="Twenty tools, one subscription. Plus a done-for-you service when you'd rather skip the build."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => {
            const t = TONE[f.tone];
            const [priceMain, priceUnit] = f.price.includes(" / ")
              ? f.price.split(" / ")
              : [f.price, ""];
            return (
              <article
                key={f.title}
                className={`group relative overflow-hidden rounded-2xl bg-white ring-1 ring-[color:var(--color-line)] p-5 md:p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:ring-2 hover:shadow-xl ${t.ring} ${t.shadow}`}
              >
                {/* top accent stripe — tone-colored, slides in on hover */}
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${t.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* corner halo that warms on hover */}
                <div
                  aria-hidden
                  className={`absolute -top-16 -right-16 size-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${t.halo}`}
                />

                {f.badge && (
                  <span
                    className={`absolute top-3 right-3 z-10 text-[9px] font-display tracking-[0.18em] px-2.5 py-1 rounded-full shadow-sm ring-1 ring-white/30 ${BADGE_STYLE[f.badge]}`}
                  >
                    {f.badge}
                  </span>
                )}

                <div
                  className={`relative size-12 rounded-xl grid place-items-center text-[26px] ring-1 transition-transform duration-300 group-hover:scale-110 ${t.icon}`}
                  aria-hidden
                >
                  <span className="drop-shadow-sm">{f.emoji}</span>
                </div>

                <h3 className="relative mt-5 text-[15px] font-bold leading-snug tracking-tight text-[color:var(--color-ink)]">
                  {f.title}
                </h3>
                <p className="relative mt-1.5 text-[13px] text-[color:var(--color-ink-muted)] leading-relaxed line-clamp-3 flex-1">
                  {f.body}
                </p>

                <div className="relative mt-5 pt-4 border-t border-[color:var(--color-line)] flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-1 min-w-0">
                    <span className="text-sm font-bold tracking-tight text-[color:var(--color-ink)] truncate">
                      {priceMain}
                    </span>
                    {priceUnit && (
                      <span className="text-[11px] text-[color:var(--color-ink-mute)] truncate">
                        / {priceUnit}
                      </span>
                    )}
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center size-7 rounded-full bg-[color:var(--color-page)] ring-1 ring-[color:var(--color-line)] text-[color:var(--color-ink-mute)] group-hover:bg-[color:var(--color-ink)] group-hover:ring-[color:var(--color-ink)] group-hover:text-white transition shrink-0"
                  >
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            );
          })}

          {/* Featured: DFY Prospecting — full width across the grid */}
          <article className="sm:col-span-2 lg:col-span-3 xl:col-span-4 relative overflow-hidden rounded-2xl ring-1 ring-[color:var(--color-gold)]/40 bg-gradient-to-br from-[color:var(--color-purple)] via-[#1a0a33] to-[color:var(--color-black)] text-white p-8 md:p-10 grain">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 size-72 rounded-full bg-[color:var(--color-gold)]/25 blur-3xl"
            />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-black)] bg-[color:var(--color-gold)] px-3 py-1 rounded-full">
                  <Sparkles className="size-3" />
                  Done-for-you
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-balance">
                  DFY Prospecting — we build the list, you hit send.
                </h3>
                <p className="mt-3 text-white/70 text-pretty max-w-xl">
                  Send your ICP. We hand back a verified, enriched, ready-to-send lead list in 72 hours.
                  No retainer, no minimums, 95% deliverability guaranteed or we re-deliver.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/signup" className="btn-primary">
                    Get 50 Free Leads
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/dfy-prospecting"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white hover:bg-white/10 px-5 py-2.5 text-sm font-medium transition"
                  >
                    Send my ICP
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-gold-soft)]">From</div>
                  <div className="mt-1 text-2xl font-extrabold text-[color:var(--color-gold-2)]">$499</div>
                  <div className="text-xs text-white/60 mt-0.5">per list</div>
                </div>
                <div className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-gold-soft)]">Turnaround</div>
                  <div className="mt-1 text-2xl font-extrabold text-[color:var(--color-gold-2)]">72h</div>
                  <div className="text-xs text-white/60 mt-0.5">standard</div>
                </div>
                <div className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-gold-soft)]">Min</div>
                  <div className="mt-1 text-2xl font-extrabold text-[color:var(--color-gold-2)]">250</div>
                  <div className="text-xs text-white/60 mt-0.5">leads</div>
                </div>
                <div className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-gold-soft)]">Deliverability</div>
                  <div className="mt-1 text-2xl font-extrabold text-[color:var(--color-gold-2)]">95%+</div>
                  <div className="text-xs text-white/60 mt-0.5">guaranteed</div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* pricing anchor target */}
        <div id="pricing" className="mt-12 text-center text-sm text-[color:var(--color-ink-muted)]">
          All features are available on every plan — pay only for what you use, or pick a flat monthly bundle.
          <Link href="/dfy-prospecting" className="ml-2 text-[color:var(--color-gold)] font-medium hover:underline">
            See bundle pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── BOOKING + TESTIMONIALS ───────────────────────── */

function Booking() {
  const testimonials = [
    { name: "Maya Okafor", role: "Founder · Northwind Labs", quote: "Replaced three tools and an offshore VA. Bookings doubled in six weeks." },
    { name: "Tariq Mahmood", role: "Head of Growth · Steadyhand", quote: "Got our first 1,000 leads in 56 hours. 12 meetings booked from sequence one." },
    { name: "Sara Petrov", role: "RevOps · Forma", quote: "The waterfall enrichment alone is worth the price. Bounce rate dropped to 1.2%." },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container-x">
        <SectionHeader
          kicker="Book a demo"
          title="Talk to a human. Get a custom walk-through."
          sub="15 minutes. We&apos;ll show you exactly how the tool would fit your motion — no slides."
        />

        {/* Cal embed — full width so the calendar grid breathes */}
        <div className="mt-12 card !p-0 overflow-hidden h-[760px] md:h-[820px] relative">
          <CalEmbed />
        </div>

        {/* Testimonials — 3-col row below */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
                <span className="ml-2 text-[10px] font-bold tracking-widest text-[color:var(--color-ink-muted)]">
                  5/5 RATING
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-[color:var(--color-gold)] to-[color:var(--color-purple-glow)]" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[color:var(--color-gold)]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
