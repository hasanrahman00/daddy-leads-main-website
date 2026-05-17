"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const BUCKETS = [
  { value: "500",    label: "500 credits",   price: 10 },
  { value: "1500",   label: "1,500 credits", price: 25, badge: "BEST VALUE" },
  { value: "5000",   label: "5,000 credits", price: 70 },
  { value: "20000",  label: "20,000 credits", price: 240 },
];

const YIELD = [
  { service: "Apollo export",          per1k: 3,    icon: "🚀" },
  { service: "Sales Navigator (only)", per1k: 30,   icon: "💼" },
  { service: "Sales Nav + email",      per1k: 80,   icon: "💼" },
  { service: "Sales Nav + waterfall",  per1k: 150,  icon: "💼" },
  { service: "Crunchbase",             per1k: 4,    icon: "💰" },
  { service: "Competitor Followers",   per1k: 3.5,  icon: "🥷" },
  { service: "Social Enrichment",      per1k: 5,    icon: "💬" },
  { service: "Waterfall (Pro tier)",   per1k: 150,  icon: "🌊" },
];

export default function SubscriptionPage() {
  const [bucket, setBucket] = useState("1500");
  const selected = BUCKETS.find((b) => b.value === bucket)!;
  const credits = parseInt(bucket, 10);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <div className="kicker">Subscription &amp; credits</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Top up or upgrade</h1>
        <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
          One subscription, every service. Credits never expire while your subscription is active.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* Pricing card */}
        <div className="card !p-7 ring-2 ring-[color:var(--color-gold)]/30 relative overflow-hidden">
          <div aria-hidden className="absolute -top-12 -right-12 size-40 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-display tracking-widest text-[color:var(--color-gold)] bg-[color:var(--color-gold)]/10 ring-1 ring-[color:var(--color-gold)]/30 px-2.5 py-1 rounded-full">
              <Sparkles className="size-3" />
              GROWTH PLAN
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold">$10</span>
              <span className="text-sm text-[color:var(--color-ink-muted)]">/month base</span>
            </div>
            <p className="mt-1 text-xs text-[color:var(--color-ink-muted)]">
              Then pay only for what you use, in credits.
            </p>

            <div className="mt-7">
              <label className="text-xs font-bold text-[color:var(--color-ink)]">
                Credit volume
              </label>
              <select
                value={bucket}
                onChange={(e) => setBucket(e.target.value)}
                className="mt-1.5 w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/40"
              >
                {BUCKETS.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label} — ${b.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 rounded-xl bg-[color:var(--color-gold)]/10 ring-1 ring-[color:var(--color-gold)]/30 p-4 flex items-baseline justify-between">
              <span className="text-xs text-[color:var(--color-ink-muted)]">Total today</span>
              <span className="text-2xl font-extrabold text-[color:var(--color-gold)]">
                ${10 + selected.price}
              </span>
            </div>

            <button type="button" className="btn-primary btn-lg w-full justify-center mt-5">
              Buy Credits
              <ArrowRight className="size-4" />
            </button>

            <ul className="mt-6 space-y-2 text-xs text-[color:var(--color-ink-muted)]">
              {[
                "All 20 services unlocked",
                "Credits roll over while subscribed",
                "Cancel any time, no exit interview",
                "Volume discount baked into bigger buckets",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-3.5 text-[color:var(--color-gold)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Yield table */}
        <div className="card !p-0 overflow-hidden">
          <div className="p-5 border-b border-[color:var(--color-line)]">
            <div className="font-bold">What {credits.toLocaleString()} credits gets you</div>
            <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
              Mix and match across services — credits are the same.
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest font-display text-[color:var(--color-ink-mute)] border-b border-[color:var(--color-line)]">
                <th className="px-5 py-3">Service</th>
                <th className="px-5 py-3 text-right">Per 1k</th>
                <th className="px-5 py-3 text-right">Yield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--color-line)]">
              {YIELD.map((y) => {
                const leads = Math.floor((credits / y.per1k) * 1000);
                return (
                  <tr key={y.service} className="hover:bg-[color:var(--color-page)]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{y.icon}</span>
                        <span className="text-[color:var(--color-ink)]">{y.service}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-right tabular-nums text-[color:var(--color-ink-muted)]">
                      {y.per1k}
                    </td>
                    <td className="px-5 py-3 text-right tabular-nums font-bold text-[color:var(--color-gold)]">
                      {leads.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
