"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[color:var(--color-gold)] via-[color:var(--color-gold-2)] to-[color:var(--color-gold)] text-[color:var(--color-black)]">
      <div className="px-4 md:px-6 py-2 flex items-center justify-center gap-2 text-xs sm:text-sm relative">
        <Sparkles className="size-3.5" />
        <span className="font-medium">
          Limited time: 2× credits on every Pro plan top-up.
        </span>
        <Link href="/dashboard/subscription" className="font-bold underline underline-offset-2">
          Claim →
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 size-5 grid place-items-center hover:bg-black/10 rounded transition"
          aria-label="Dismiss"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
