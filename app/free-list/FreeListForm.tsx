"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

type FormState = {
  firstName: string;
  title: string;
  company: string;
  website: string;
  whatsapp: string;
  email: string;
  icp: string;
};

const INITIAL: FormState = {
  firstName: "",
  title: "",
  company: "",
  website: "",
  whatsapp: "",
  email: "",
  icp: "",
};

export function FreeListForm() {
  const [state, setState] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[Free list request]", state);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card !p-10 md:!p-14 text-center">
        <div className="mx-auto size-16 rounded-full bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/40">
          <Check className="size-7" />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight">
          Got it. Your free list is on the way.
        </h3>
        <p className="mt-4 text-[color:var(--color-ink-muted)] max-w-lg mx-auto">
          We&apos;ll send your free verified lead list to{" "}
          <span className="text-[color:var(--color-gold)] font-semibold">
            {state.email || "your inbox"}
          </span>{" "}
          within 24 hours. Keep an eye on WhatsApp too — we may ping you to clarify your ICP.
        </p>
        <button
          type="button"
          onClick={() => {
            setState(INITIAL);
            setSubmitted(false);
          }}
          className="mt-10 text-xs text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-gold)] transition uppercase font-semibold tracking-widest"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card !p-8 md:!p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="First name"
          required
          value={state.firstName}
          onChange={(v) => set("firstName", v)}
          placeholder="Hasan"
          autoComplete="given-name"
        />
        <Input
          label="Title"
          value={state.title}
          onChange={(v) => set("title", v)}
          placeholder="Founder · Head of Growth · CEO"
          autoComplete="organization-title"
        />
        <Input
          label="Company name"
          required
          value={state.company}
          onChange={(v) => set("company", v)}
          placeholder="DXL Labs"
          autoComplete="organization"
        />
        <Input
          label="Website"
          type="url"
          value={state.website}
          onChange={(v) => set("website", v)}
          placeholder="https://yourcompany.com"
          autoComplete="url"
        />
        <Input
          label="WhatsApp number"
          required
          type="tel"
          value={state.whatsapp}
          onChange={(v) => set("whatsapp", v)}
          placeholder="+1 555 010 2233"
          autoComplete="tel"
          hint="Include country code. We'll only ping if we need to clarify your ICP."
        />
        <Input
          label="Email"
          required
          type="email"
          value={state.email}
          onChange={(v) => set("email", v)}
          placeholder="hasan@company.com"
          autoComplete="email"
          hint="Your list lands here."
        />
      </div>

      <Textarea
        label="ICP description"
        required
        value={state.icp}
        onChange={(v) => set("icp", v)}
        rows={6}
        placeholder={`Who do you sell to?\n\nE.g. "B2B SaaS founders, Seed–Series A, 11–50 headcount, US + UK, using HubSpot, hiring sales right now."\n\nThe sharper the brief, the better the list.`}
        hint="Industry, titles, geos, company size, tech stack — whatever makes a lead 'good' for you."
      />

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[color:var(--color-line)]">
        <div className="text-xs text-[color:var(--color-ink-muted)]">
          By submitting you agree to our{" "}
          <a
            href="/terms-and-conditions"
            className="text-[color:var(--color-gold)] hover:underline"
          >
            terms
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            className="text-[color:var(--color-gold)] hover:underline"
          >
            privacy policy
          </a>
          .
        </div>
        <button type="submit" className="btn-primary btn-lg shrink-0">
          Send
          <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

/* ─────────── form primitives ─────────── */

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-[color:var(--color-ink)]">
      {children}
      {required && (
        <span className="text-[color:var(--color-gold)] ml-1">*</span>
      )}
    </label>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1.5 text-[11px] text-[color:var(--color-ink-muted)]">
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  hint,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-mute)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)] transition"
      />
      {hint && <Hint>{hint}</Hint>}
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  required,
  placeholder,
  rows = 4,
  hint,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  hint?: string;
}) {
  return (
    <div>
      {label && <Label required={required}>{label}</Label>}
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${label ? "mt-2" : ""} w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-mute)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)] transition resize-y`}
      />
      {hint && <Hint>{hint}</Hint>}
    </div>
  );
}
