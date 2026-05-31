import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const mark =
    size === "sm" ? "size-7 text-xs" :
    size === "lg" ? "size-11 text-base" :
    size === "xl" ? "size-14 text-lg" :
    "size-9 text-sm";
  return (
    <span
      aria-label="Daddy Leads"
      className={`${mark} inline-grid place-items-center rounded-xl bg-gradient-to-br from-[color:var(--color-gold-2)] to-[color:var(--color-gold)] text-white font-extrabold ring-1 ring-[color:var(--color-gold-soft)]/60 shadow-card`}
    >
      DL
    </span>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <div className="kicker">{children}</div>;
}

export function SectionHeader({
  kicker,
  title,
  sub,
  center,
}: {
  kicker?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-balance text-[color:var(--color-ink)]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-[color:var(--color-ink-muted)] text-pretty">{sub}</p>
      )}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  sub,
  cta,
}: {
  kicker?: string;
  title: React.ReactNode;
  sub?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden brand-glow">
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container-x relative pt-20 md:pt-28 pb-14 text-center">
        {kicker && (
          <div className="kicker mb-5 inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[color:var(--color-brand)] anim-pulse-slow" />
            {kicker}
          </div>
        )}
        <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
          {title}
        </h1>
        {sub && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[color:var(--color-ink-muted)] text-pretty">
            {sub}
          </p>
        )}
        {cta && (
          <div className="mt-9 flex justify-center">
            <Link href={cta.href} className="btn-primary btn-lg">
              {cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function StatsCTA() {
  const stats = [
    { label: "Verification", value: "99.8%", note: "LIVE" },
    { label: "Latency", value: "42ms", note: "STABLE" },
    { label: "Data points", value: "12.4M", note: "SYNCED" },
  ];
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--color-purple)] via-[#1a0a33] to-[color:var(--color-black)] text-white px-8 py-12 md:px-14 md:py-16 ring-1 ring-[color:var(--color-gold)]/30 grain">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 size-80 rounded-full bg-[color:var(--color-brand)]/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 size-72 rounded-full bg-[color:var(--color-purple-glow)]/30 blur-3xl"
          />
          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="kicker text-[color:var(--color-gold-soft)]">
                Advanced Lead Intelligence
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">
                Scale your outbound with precision data sourcing.
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Verified leads, real-time data, and seamless export — one platform
                replacing the whole stack.
              </p>
              <div className="mt-7">
                <button type="button" className="btn-primary btn-lg">
                  Order Now
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 backdrop-blur-sm"
                >
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    {s.label}
                  </div>
                  <div className="mt-2 text-3xl font-bold">{s.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-[color:var(--color-gold-soft)]">
                    ● {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
