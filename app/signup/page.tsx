import type { Metadata } from "next";
import Link from "next/link";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/ui";
import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Create your account — Daddy Leads",
  description:
    "Create your Daddy Leads account in 30 seconds. 50 verified leads on the house. No card required.",
};

const PERKS = [
  { emoji: "⚡", label: "Live in 30 seconds", note: "No onboarding call" },
  { emoji: "🎁", label: "50 free leads", note: "On the house" },
  { emoji: "🔒", label: "No credit card", note: "Cancel any time" },
];

export default function SignupPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="relative flex-1 overflow-hidden grid place-items-center py-16 md:py-24">
        {/* Background decorations */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-32 size-[440px] rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
          <div className="absolute bottom-10 -right-32 size-[480px] rounded-full bg-[color:var(--color-purple)]/15 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[680px] rounded-full bg-[color:var(--color-gold)]/[0.06] blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        {/* Floating decorative cards (desktop only) */}
        <div
          aria-hidden
          className="hidden xl:block absolute top-32 left-[8%] card !p-3 !pr-5 anim-float"
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">👋</div>
            <div>
              <div className="text-xs font-bold">2,400+ founders</div>
              <div className="text-[10px] text-[color:var(--color-ink-muted)]">
                signed up this month
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="hidden xl:block absolute bottom-40 right-[8%] card !p-3 !pr-5 anim-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <div className="text-xs font-bold">98.7% deliverability</div>
              <div className="text-[10px] text-[color:var(--color-ink-muted)]">
                Live, last 30 days
              </div>
            </div>
          </div>
        </div>

        <div className="relative container-x">
          {/* Floating perks pill above the card */}
          <div className="max-w-md mx-auto mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-display tracking-[0.22em] text-white bg-gradient-to-r from-[color:var(--color-gold)] to-[color:var(--color-gold-2)] px-4 py-1.5 rounded-full shadow-lg ring-1 ring-white/40">
              <span className="text-sm">✨</span>
              50 FREE LEADS · NO CARD
            </span>
          </div>

          {/* Main auth card */}
          <div className="max-w-md mx-auto card !p-8 md:!p-10 shadow-card-lg ring-1 ring-[color:var(--color-gold)]/20">
            <div className="flex justify-center">
              <Logo size="xl" />
            </div>
            <div className="mt-5 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight">
                Create your <span className="gradient-text">account</span>
              </h1>
              <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                Join 2,400+ founders shipping outbound this week.
              </p>
            </div>

            <div className="mt-8">
              <SignupForm />
            </div>

            <div className="mt-7 text-center text-sm text-[color:var(--color-ink-muted)]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[color:var(--color-gold)] hover:underline font-semibold"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Perks strip below card */}
          <div className="max-w-md mx-auto mt-5 grid grid-cols-3 gap-3">
            {PERKS.map((p) => (
              <div
                key={p.label}
                className="rounded-xl bg-white/60 backdrop-blur ring-1 ring-[color:var(--color-line)] px-3 py-3 text-center transition hover:bg-white hover:ring-[color:var(--color-gold)]/30"
              >
                <div className="text-xl leading-none">{p.emoji}</div>
                <div className="mt-1.5 text-[11px] font-bold text-[color:var(--color-ink)]">
                  {p.label}
                </div>
                <div className="text-[9px] text-[color:var(--color-ink-mute)]">{p.note}</div>
              </div>
            ))}
          </div>

          {/* Terms */}
          <div className="mt-8 text-center text-xs text-[color:var(--color-ink-mute)]">
            By signing up you agree to our{" "}
            <Link href="/terms-and-conditions" className="text-[color:var(--color-gold)] hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-[color:var(--color-gold)] hover:underline">
              privacy policy
            </Link>
            .
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
