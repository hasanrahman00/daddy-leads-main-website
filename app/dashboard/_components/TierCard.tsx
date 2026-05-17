"use client";

import { Check } from "lucide-react";

export type Tier = {
  id: string;
  name: string;
  price: string;
  per: string;
  features: string[];
  badge?: string;
};

export function TierGrid({
  tiers,
  value,
  onChange,
}: {
  tiers: Tier[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {tiers.map((t) => {
        const active = value === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={`group relative text-left rounded-xl p-5 ring-1 transition ${
              active
                ? "bg-[color:var(--color-gold)]/10 ring-2 ring-[color:var(--color-gold)] shadow-card"
                : "bg-white ring-[color:var(--color-line)] hover:ring-[color:var(--color-gold)]/40"
            }`}
          >
            {t.badge && (
              <span className="absolute top-3 right-3 text-[9px] font-display tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-[color:var(--color-gold)] to-[color:var(--color-gold-2)] text-white">
                {t.badge}
              </span>
            )}
            <div className="flex items-center gap-2">
              <span
                className={`size-4 rounded-full grid place-items-center ring-1 transition ${
                  active
                    ? "bg-[color:var(--color-gold)] ring-[color:var(--color-gold)] text-white"
                    : "bg-white ring-[color:var(--color-line-strong)]"
                }`}
              >
                {active && <Check className="size-2.5" />}
              </span>
              <div className="font-bold text-sm">{t.name}</div>
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[color:var(--color-gold)]">
                {t.price}
              </span>
              <span className="text-xs text-[color:var(--color-ink-mute)]">{t.per}</span>
            </div>
            <ul className="mt-4 space-y-1.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-[color:var(--color-ink-muted)]">
                  <Check className="size-3 mt-0.5 text-[color:var(--color-gold)] shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </button>
        );
      })}
    </div>
  );
}
