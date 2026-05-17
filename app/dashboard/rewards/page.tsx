"use client";

import { Sparkles, Video, Image as ImageIcon, Award, ArrowRight, Check } from "lucide-react";

const REWARDS = [
  {
    emoji: "💬",
    title: "Post about us on LinkedIn",
    credits: 10,
    blurb: "Share your honest experience with Daddy Leads. Tag us, drop the link, and we credit you.",
    cta: "Submit my post →",
  },
  {
    emoji: "🎥",
    title: "Record a Senja video review",
    credits: 20,
    blurb: "60-second video on Senja talking about how you use Daddy Leads. Real review, real credits.",
    cta: "Record now →",
  },
];

const STEPS = [
  { n: "01", icon: <Video className="size-5" />,     title: "Record a video",       body: "60 seconds. Phone camera is fine. Talk about what Daddy Leads has done for your outbound." },
  { n: "02", icon: <ImageIcon className="size-5" />, title: "Upload a screenshot",  body: "Of your post or your Senja video. We use it for social proof — only with your sign-off." },
  { n: "03", icon: <Award className="size-5" />,     title: "Get credits",          body: "Manual review takes 24h. Credits land on your account, ready to spend immediately." },
];

export default function RewardsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--color-gold)]/15 via-[color:var(--color-purple)]/5 to-[color:var(--color-purple)]/15 ring-1 ring-[color:var(--color-gold)]/30 p-8 md:p-10">
        <div aria-hidden className="absolute -top-12 -right-12 size-48 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="kicker">Refer · review · earn</div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
              Earn up to <span className="text-[color:var(--color-gold)]">30 credits</span> — for honest feedback
            </h1>
            <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] max-w-lg">
              We&apos;re a small team building in public. Honest reviews carry us further than ads. We pay for them in credits.
            </p>
          </div>
          <div className="text-7xl drop-shadow-sm">🎁</div>
        </div>
      </div>

      {/* Reward items */}
      <div className="grid md:grid-cols-2 gap-5">
        {REWARDS.map((r) => (
          <div key={r.title} className="card !p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-4xl">{r.emoji}</div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--color-gold)] bg-[color:var(--color-gold)]/10 ring-1 ring-[color:var(--color-gold)]/30 px-2.5 py-1 rounded-full">
                <Sparkles className="size-3" />
                +{r.credits} credits
              </span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
            <p className="mt-1 text-sm text-[color:var(--color-ink-muted)] flex-1">{r.blurb}</p>
            <button type="button" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--color-gold)] hover:underline self-start">
              {r.cta}
            </button>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div>
        <div className="kicker">How it works</div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Three steps, no chasing.</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="card !p-5 relative overflow-hidden">
              <div aria-hidden className="absolute bottom-2 right-3 font-display text-6xl leading-none text-[color:var(--color-gold)]/10">
                {s.n}
              </div>
              <div className="relative">
                <div className="size-10 rounded-xl bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/30">
                  {s.icon}
                </div>
                <div className="mt-4 text-[10px] font-display tracking-[0.22em] text-[color:var(--color-gold)]">
                  STEP {s.n}
                </div>
                <h3 className="mt-1 text-base font-bold">{s.title}</h3>
                <p className="mt-1.5 text-xs text-[color:var(--color-ink-muted)] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Already done it */}
      <div className="card !p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
            <Check className="size-5" />
          </div>
          <div>
            <div className="font-bold">Already posted or recorded?</div>
            <div className="text-xs text-[color:var(--color-ink-muted)]">Submit the link and we&apos;ll credit you within 24h.</div>
          </div>
        </div>
        <button type="button" className="btn-primary">
          Submit a review
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
