"use client";

import { useState, FormEvent, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { ArrowRight, Check, Loader2, Sparkles } from "lucide-react";

const SOURCES = [
  "Google search",
  "X / Twitter",
  "LinkedIn",
  "YouTube",
  "Reddit",
  "Friend or colleague",
  "Newsletter",
  "Affiliate link",
  "Other",
];

export function OnboardingCard() {
  const { user, isLoaded } = useUser();

  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  // Hide the card if onboarding is already complete (re-read on mount)
  useEffect(() => {
    if (!isLoaded || !user) return;
    const meta = user.unsafeMetadata as { phone?: string; source?: string } | undefined;
    if (meta?.source) {
      setHide(true);
    }
  }, [isLoaded, user]);

  if (!isLoaded || hide) return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);
    setError(null);
    try {
      await user.update({
        unsafeMetadata: {
          phone: phone.trim() || null,
          source,
        },
      });
      setDone(true);
      // Slide it away after a beat
      setTimeout(() => setHide(true), 1600);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Couldn't save. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="card !p-6 ring-1 ring-emerald-500/40 bg-emerald-50/50 flex items-center gap-3">
        <div className="size-10 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0">
          <Check className="size-5" />
        </div>
        <div>
          <div className="font-bold">All set, thanks!</div>
          <div className="text-xs text-[color:var(--color-ink-muted)]">
            You&apos;re ready to start exporting leads.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card !p-6 md:!p-8 ring-2 ring-[color:var(--color-gold)]/30 bg-gradient-to-br from-white to-[color:var(--color-gold)]/[0.04]">
      <div className="flex items-start gap-3">
        <div className="size-10 rounded-xl bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/30 shrink-0">
          <Sparkles className="size-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg">One last step — 20 seconds</h3>
          <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
            Help us tailor your account. Both fields below help, neither is locked in.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-5 grid sm:grid-cols-2 gap-4">
        <div>
          <div className="flex items-baseline justify-between">
            <label className="block text-xs font-semibold text-[color:var(--color-ink)]">
              WhatsApp number
            </label>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[color:var(--color-ink-mute)]">
              Optional
            </span>
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 010 1234"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)] transition"
          />
          <p className="mt-1 text-[10px] text-[color:var(--color-ink-mute)]">
            For priority alerts via WhatsApp. We never call.
          </p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[color:var(--color-ink)]">
            Where did you hear about us?
            <span className="text-[color:var(--color-gold)] ml-0.5">*</span>
          </label>
          <select
            required
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="mt-1.5 w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)] transition"
          >
            <option value="" disabled>Choose…</option>
            {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {error && (
          <div className="sm:col-span-2 rounded-lg bg-rose-50 ring-1 ring-rose-200 px-3 py-2 text-xs text-rose-700">
            {error}
          </div>
        )}

        <div className="sm:col-span-2 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setHide(true)}
            className="text-xs text-[color:var(--color-ink-mute)] hover:text-[color:var(--color-ink)] font-semibold"
          >
            Skip for now
          </button>
          <button
            type="submit"
            disabled={submitting || !source}
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? <Loader2 className="size-4 animate-spin" /> : null}
            Save &amp; continue
            {!submitting && <ArrowRight className="size-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}
