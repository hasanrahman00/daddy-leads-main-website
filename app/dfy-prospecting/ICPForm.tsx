"use client";

import { useState, FormEvent } from "react";
import { Check, ArrowRight, Clock, Target, Zap } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  industries: string;
  titles: string;
  companySize: string;
  geos: string;
  techStack: string;
  signals: string;
  pkg: string;
  timeline: string;
  notes: string;
};

const INITIAL: FormState = {
  name: "", email: "", company: "", role: "",
  industries: "", titles: "", companySize: "", geos: "", techStack: "", signals: "",
  pkg: "growth", timeline: "standard", notes: "",
};

const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–500", "501–1k", "1k–5k", "5k+"];
const PACKAGES = [
  { id: "starter", label: "Starter", leads: "250", price: "$499" },
  { id: "growth", label: "Growth", leads: "1k", price: "$1,499" },
  { id: "scale", label: "Scale", leads: "5k", price: "$4,999" },
  { id: "custom", label: "Custom", leads: "10k+", price: "Quote" },
];
const TIMELINES = [
  { id: "standard", label: "Standard", note: "72 hours", icon: <Clock className="size-4" /> },
  { id: "rush", label: "Rush", note: "48 hours · +25%", icon: <Zap className="size-4" /> },
  { id: "sameday", label: "Same day", note: "12h · +75%", icon: <Target className="size-4" /> },
];

export function ICPForm() {
  const [state, setState] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[DFY brief]", state);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card !p-10 md:!p-14 text-center">
        <div className="mx-auto size-16 rounded-full bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/40">
          <Check className="size-7" />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-bold">
          Brief received. The boomerang is in flight.
        </h3>
        <p className="mt-4 text-[color:var(--color-ink-muted)] max-w-lg mx-auto">
          We&apos;ll send a firm quote to{" "}
          <span className="text-[color:var(--color-brand)] font-semibold">
            {state.email || "your inbox"}
          </span>{" "}
          within 4 hours. If you picked Standard, expect your list in 72 hours from approval.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          {[
            { n: "01", t: "Quote in 4h", b: "Founders review the brief, send a firm price." },
            { n: "02", t: "Approval ping", b: "One-click approve, we start the build." },
            { n: "03", t: "Delivery", b: "CSV + into your account, sync hits Slack if connected." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl bg-[color:var(--color-page)] ring-1 ring-[color:var(--color-line)] p-5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-gold)]">
                {s.n}
              </div>
              <div className="font-bold mt-1">{s.t}</div>
              <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">{s.b}</div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setState(INITIAL);
            setSubmitted(false);
          }}
          className="mt-10 text-xs text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-brand)] transition uppercase font-semibold tracking-widest"
        >
          Submit another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card !p-8 md:!p-10 space-y-10">
      <FieldGroup step="01" title="About you" sub="So we know who to send the quote to.">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Your name" required value={state.name} onChange={(v) => set("name", v)} placeholder="Hasan Rahman" />
          <Input label="Work email" required type="email" value={state.email} onChange={(v) => set("email", v)} placeholder="hasan@company.com" />
          <Input label="Company" required value={state.company} onChange={(v) => set("company", v)} placeholder="DXL Labs" />
          <Input label="Your role" value={state.role} onChange={(v) => set("role", v)} placeholder="Founder, Head of Growth, etc." />
        </div>
      </FieldGroup>

      <FieldGroup
        step="02"
        title="Your ICP"
        sub="The sharper the brief, the better the list. Don't overthink it — bullet points are fine."
      >
        <div className="grid gap-4">
          <Textarea
            label="Target industries"
            required
            value={state.industries}
            onChange={(v) => set("industries", v)}
            placeholder={`B2B SaaS, fintech, dev tools\nHealthtech (US only)\nMarketplaces with seller-side ops`}
            rows={3}
            hint="One per line. Be as specific as you can — vertical, sub-vertical, GTM motion."
          />

          <Textarea
            label="Target job titles"
            required
            value={state.titles}
            onChange={(v) => set("titles", v)}
            placeholder={`Head of Growth, VP Marketing\nFounder / CEO (Seed–Series A only)\nRevOps lead`}
            rows={3}
            hint="Buyer titles + influencer titles. Add seniority if it matters."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Select
              label="Company size"
              required
              value={state.companySize}
              onChange={(v) => set("companySize", v)}
              options={COMPANY_SIZES.map((s) => ({ value: s, label: s }))}
              placeholder="Pick a range"
            />
            <Input
              label="Geographies"
              required
              value={state.geos}
              onChange={(v) => set("geos", v)}
              placeholder="US, Canada, UK, EU (excl. DE)"
              hint="Comma-separated."
            />
          </div>

          <Textarea
            label="Tech stack hints"
            value={state.techStack}
            onChange={(v) => set("techStack", v)}
            placeholder={`Uses Segment + Stripe\nHubspot CRM (not Salesforce)\nModern data stack (Snowflake, dbt)`}
            rows={2}
            hint="Optional — tells us who's a good fit by what they run."
          />

          <Textarea
            label="Intent signals to prioritize"
            value={state.signals}
            onChange={(v) => set("signals", v)}
            placeholder={`Raised in last 6 months\nHiring a Head of Sales\nRecently migrated off competitor X`}
            rows={2}
            hint="What makes a lead 'hot' for you?"
          />
        </div>
      </FieldGroup>

      <FieldGroup step="03" title="Volume & timeline" sub="Pick a package and how fast you need it.">
        <div className="space-y-6">
          <div>
            <Label>Package</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-2">
              {PACKAGES.map((p) => (
                <RadioCard
                  key={p.id}
                  checked={state.pkg === p.id}
                  onClick={() => set("pkg", p.id)}
                  primary={p.label}
                  secondary={`${p.leads} leads`}
                  tertiary={p.price}
                />
              ))}
            </div>
          </div>

          <div>
            <Label>Turnaround</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
              {TIMELINES.map((t) => (
                <RadioCard
                  key={t.id}
                  checked={state.timeline === t.id}
                  onClick={() => set("timeline", t.id)}
                  primary={t.label}
                  secondary={t.note}
                  icon={t.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </FieldGroup>

      <FieldGroup
        step="04"
        title="Anything else?"
        sub="Examples of leads you love, accounts to exclude, weird edge cases — pour it out."
      >
        <Textarea
          value={state.notes}
          onChange={(v) => set("notes", v)}
          placeholder={`Exclude any leads at our existing customer list (we'll send CSV).\nPrefer founders who post on LinkedIn weekly.\nHard no on agencies.`}
          rows={4}
        />
      </FieldGroup>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[color:var(--color-line)]">
        <div className="text-xs text-[color:var(--color-ink-muted)]">
          By submitting you agree to our{" "}
          <a href="/terms-and-conditions" className="text-[color:var(--color-brand)] hover:underline">terms</a>{" "}
          and{" "}
          <a href="/privacy-policy" className="text-[color:var(--color-brand)] hover:underline">privacy policy</a>.
        </div>
        <button type="submit" className="btn-primary btn-lg shrink-0">
          Send brief
          <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

/* ─────────── form primitives ─────────── */

function FieldGroup({
  step,
  title,
  sub,
  children,
}: {
  step: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-brand)]">
          Step {step}
        </div>
        <legend className="font-bold text-lg mt-1">{title}</legend>
        <div className="text-xs text-[color:var(--color-ink-muted)] mt-2 leading-relaxed">
          {sub}
        </div>
      </div>
      <div>{children}</div>
    </fieldset>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-[color:var(--color-ink)]">
      {children}
      {required && <span className="text-[color:var(--color-brand)] ml-1">*</span>}
    </label>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return <div className="mt-1.5 text-[11px] text-[color:var(--color-ink-muted)]">{children}</div>;
}

function Input({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  hint?: string;
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

function Select({
  label,
  value,
  onChange,
  options,
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg bg-white ring-1 ring-[color:var(--color-line)] px-4 py-2.5 text-sm text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)] transition"
      >
        <option value="" disabled>
          {placeholder ?? "Select…"}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioCard({
  checked,
  onClick,
  primary,
  secondary,
  tertiary,
  icon,
}: {
  checked: boolean;
  onClick: () => void;
  primary: string;
  secondary?: string;
  tertiary?: string;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-left rounded-xl p-4 ring-1 transition ${
        checked
          ? "bg-[color:var(--color-gold)]/10 ring-[color:var(--color-gold)] shadow-card"
          : "bg-white ring-[color:var(--color-line)] hover:ring-[color:var(--color-line-strong)]"
      }`}
    >
      {checked && (
        <span className="absolute top-2.5 right-2.5 size-5 rounded-full bg-[color:var(--color-gold)] text-[color:var(--color-black)] grid place-items-center">
          <Check className="size-3" />
        </span>
      )}
      <div className="flex items-center gap-2">
        {icon && <span className="text-[color:var(--color-gold)]">{icon}</span>}
        <div className="font-bold">{primary}</div>
      </div>
      {secondary && <div className="mt-1 text-xs text-[color:var(--color-ink-muted)]">{secondary}</div>}
      {tertiary && <div className="mt-1 text-xs font-bold text-[color:var(--color-gold)]">{tertiary}</div>}
    </button>
  );
}
