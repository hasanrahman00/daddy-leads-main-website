import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { ArrowRight, TrendingUp, Mail, Users, Sparkles } from "lucide-react";

import { OnboardingCard } from "./OnboardingCard";

export const metadata = {
  title: "Dashboard — Daddy Leads",
};

const STATS = [
  { emoji: "🎁", label: "Free leads remaining", value: "50", note: "Of 50 granted", tone: "bg-amber-100 text-amber-700" },
  { emoji: "💼", label: "Lead lists", value: "0", note: "Build your first one", tone: "bg-sky-100 text-sky-600" },
  { emoji: "🚀", label: "Sequences live", value: "0", note: "Nothing scheduled", tone: "bg-violet-100 text-violet-600" },
  { emoji: "📬", label: "Replies this week", value: "0", note: "Get your first reply", tone: "bg-emerald-100 text-emerald-700" },
];

const QUICK_ACTIONS = [
  { emoji: "🔗", title: "Paste a Sales Nav URL", note: "Get your first 1k leads", href: "/dashboard/lists/new?source=sales-nav" },
  { emoji: "📊", title: "Bring in an Apollo search", note: "Re-verify on the fly", href: "/dashboard/lists/new?source=apollo" },
  { emoji: "🌐", title: "Enrich a domain", note: "Decision-makers in seconds", href: "/dashboard/lists/new?source=domain" },
  { emoji: "✨", title: "Skip the build — DFY", note: "We deliver in 72 hours", href: "/dfy-prospecting" },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? user?.username ?? "there";

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Greeting */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="kicker">Welcome back</div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
            Hey {firstName} <span aria-hidden>👋</span>
          </h1>
          <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
            Here&apos;s a snapshot. Your 50 free leads are ready to claim.
          </p>
        </div>
        <Link href="/dashboard/lists/new" className="btn-primary">
          Create your first list
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Onboarding card — only shows if WhatsApp/source not yet filled */}
      <OnboardingCard />

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="card !p-5">
            <div className="flex items-start justify-between">
              <div className={`size-10 rounded-xl grid place-items-center text-xl ${s.tone}`}>
                {s.emoji}
              </div>
              <span className="text-[10px] uppercase font-display tracking-[0.18em] text-[color:var(--color-ink-mute)]">
                {s.label}
              </span>
            </div>
            <div className="mt-4 text-3xl font-extrabold">{s.value}</div>
            <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">{s.note}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="card !p-6 md:!p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Get started in 60 seconds</h2>
          <Link
            href="/#features"
            className="text-xs font-display tracking-[0.18em] text-[color:var(--color-gold)] hover:underline"
          >
            ALL 20 TOOLS →
          </Link>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {QUICK_ACTIONS.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group rounded-xl ring-1 ring-[color:var(--color-line)] hover:ring-[color:var(--color-gold)]/40 hover:shadow-card-lg bg-white p-4 transition flex flex-col"
            >
              <div className="text-2xl">{a.emoji}</div>
              <div className="mt-3 font-bold text-sm">{a.title}</div>
              <div className="text-xs text-[color:var(--color-ink-muted)] mt-0.5 flex-1">{a.note}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-gold)] opacity-0 group-hover:opacity-100 transition">
                Start
                <ArrowRight className="size-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Empty state CTAs */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card !p-6">
          <div className="size-10 rounded-xl bg-sky-100 text-sky-600 grid place-items-center">
            <Mail className="size-5" />
          </div>
          <h3 className="mt-4 font-bold">Connect a mailbox</h3>
          <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
            Add a Gmail or Outlook inbox to send sequences. We rotate sends across all connected mailboxes.
          </p>
          <Link
            href="/dashboard/mailboxes"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-gold)] hover:underline"
          >
            Connect <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="card !p-6 ring-1 ring-[color:var(--color-gold)]/30 bg-gradient-to-br from-white to-[color:var(--color-gold)]/[0.04]">
          <div className="size-10 rounded-xl bg-[color:var(--color-gold)]/15 text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/30 grid place-items-center">
            <Sparkles className="size-5" />
          </div>
          <h3 className="mt-4 font-bold">Skip the build — get a list in 72h</h3>
          <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
            Send us your ICP. We hand back a verified, enriched, ready-to-send list. 95% deliverability guaranteed.
          </p>
          <Link href="/dfy-prospecting" className="mt-4 btn-primary">
            Send my ICP
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Activity stub */}
      <div className="card !p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Recent activity</h3>
          <span className="text-xs text-[color:var(--color-ink-mute)]">Last 7 days</span>
        </div>
        <div className="mt-6 text-center py-8">
          <div className="mx-auto size-12 rounded-full bg-gray-100 grid place-items-center text-[color:var(--color-ink-mute)]">
            <TrendingUp className="size-5" />
          </div>
          <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
            No activity yet. Create a list to see scrape jobs, sends, and replies appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
