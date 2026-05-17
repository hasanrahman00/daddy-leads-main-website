"use client";

import Link from "next/link";
import { Info, PlayCircle, FileSpreadsheet, ArrowRight, Sparkles } from "lucide-react";

export function ExportFormCard({
  emoji,
  title,
  subtitle,
  children,
  cta = "Get My Leads",
  onSubmit,
  credits,
  remaining,
  processingNote = "Standard processing: 12–24 hours.",
  sampleHref = "#",
  tutorialHref = "#",
  showFooter = true,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  cta?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  credits?: string;
  remaining?: string;
  processingNote?: string;
  sampleHref?: string;
  tutorialHref?: string;
  showFooter?: boolean;
}) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="size-14 rounded-2xl grid place-items-center bg-white ring-1 ring-[color:var(--color-line)] shadow-card text-3xl">
          {emoji}
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{subtitle}</p>
        </div>
      </div>

      {/* Card */}
      <form onSubmit={onSubmit} className="card !p-6 md:!p-8 space-y-5">
        {children}

        {/* Processing note */}
        <div className="rounded-lg bg-orange-50 ring-1 ring-orange-200 px-4 py-3 text-xs text-orange-800 flex items-start gap-2">
          <Info className="size-4 shrink-0 mt-0.5 text-orange-500" />
          <span>{processingNote}</span>
        </div>

        {/* Submit row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          <div className="text-xs text-[color:var(--color-ink-muted)] space-y-0.5">
            {credits && (
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🪙</span>
                <span className="font-bold text-[color:var(--color-ink)]">{credits}</span>
                <span>credits per run</span>
              </div>
            )}
            {remaining && (
              <div className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-[color:var(--color-gold)]" />
                <span className="font-bold text-[color:var(--color-ink)]">{remaining}</span>
                <span>remaining this month</span>
              </div>
            )}
          </div>
          <button type="submit" className="btn-primary btn-lg">
            {cta}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </form>

      {/* Footer */}
      {showFooter && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          <Link href={tutorialHref} className="inline-flex items-center gap-1.5 text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-gold)]">
            <PlayCircle className="size-4" />
            How it works (90s video)
          </Link>
          <Link href={sampleHref} className="inline-flex items-center gap-1.5 text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-gold)]">
            <FileSpreadsheet className="size-4" />
            Sample file
          </Link>
        </div>
      )}
    </div>
  );
}

/* ─── Form primitives used by every export page ─── */

export function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-[color:var(--color-ink)]">
        {label}
        {required && <span className="text-[color:var(--color-gold)] ml-0.5">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && <p className="mt-1.5 text-[11px] text-[color:var(--color-ink-mute)]">{hint}</p>}
    </div>
  );
}

const baseInput =
  "w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-mute)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)] transition";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={baseInput} />;
}
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={baseInput} />;
}
