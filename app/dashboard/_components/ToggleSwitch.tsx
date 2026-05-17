"use client";

export type ToggleOption = { value: string; label: string };

export function ToggleSwitch({
  options,
  value,
  onChange,
}: {
  options: ToggleOption[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="inline-flex rounded-full bg-[color:var(--color-page)] ring-1 ring-[color:var(--color-line)] p-1">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              active
                ? "bg-white text-[color:var(--color-ink)] shadow-card ring-1 ring-[color:var(--color-gold)]/40"
                : "text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
