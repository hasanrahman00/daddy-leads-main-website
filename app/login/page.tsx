import type { Metadata } from "next";
import Link from "next/link";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/ui";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign in — Daddy Leads",
  description: "Sign in to your Daddy Leads account.",
};

const PERKS = [
  { emoji: "🔐", label: "Encrypted", note: "End-to-end" },
  { emoji: "⚡", label: "One-click SSO", note: "Google ready" },
  { emoji: "📬", label: "Magic links", note: "No password reset" },
];

export default function LoginPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="relative flex-1 overflow-hidden grid place-items-center py-16 md:py-24">
        {/* Background decorations */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-32 size-[440px] rounded-full bg-[color:var(--color-purple)]/15 blur-3xl" />
          <div className="absolute bottom-10 -right-32 size-[480px] rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[680px] rounded-full bg-[color:var(--color-gold)]/[0.06] blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        {/* Floating decorative cards (desktop only) */}
        <div
          aria-hidden
          className="hidden xl:block absolute top-32 left-[8%] card !p-3 !pr-5 anim-float"
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">⏱️</div>
            <div>
              <div className="text-xs font-bold">Avg. session</div>
              <div className="text-[10px] text-[color:var(--color-ink-muted)]">
                resumes in &lt; 2 seconds
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
            <div className="text-2xl">🛡️</div>
            <div>
              <div className="text-xs font-bold">SOC 2 type II</div>
              <div className="text-[10px] text-[color:var(--color-ink-muted)]">
                Independently audited
              </div>
            </div>
          </div>
        </div>

        <div className="relative container-x">
          {/* Floating welcome pill above the card */}
          <div className="max-w-md mx-auto mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-display tracking-[0.22em] text-white bg-gradient-to-r from-[color:var(--color-purple)] to-[color:var(--color-purple-2)] px-4 py-1.5 rounded-full shadow-lg ring-1 ring-white/30">
              <span className="text-sm">👋</span>
              WELCOME BACK
            </span>
          </div>

          {/* Main auth card */}
          <div className="max-w-md mx-auto card !p-8 md:!p-10 shadow-card-lg ring-1 ring-[color:var(--color-gold)]/20">
            <div className="flex justify-center">
              <Logo size="xl" />
            </div>
            <div className="mt-5 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight">
                Sign back <span className="gradient-text">in</span>.
              </h1>
              <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                Pick up where you left off — your leads are waiting.
              </p>
            </div>

            <div className="mt-8">
              <LoginForm />
            </div>

            <div className="mt-7 text-center text-sm text-[color:var(--color-ink-muted)]">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-[color:var(--color-gold)] hover:underline font-semibold"
              >
                Sign up
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

          {/* Support */}
          <div className="mt-8 text-center text-xs text-[color:var(--color-ink-mute)]">
            Trouble signing in?{" "}
            <a
              href="mailto:contact@daddy-leads.com"
              className="text-[color:var(--color-gold)] hover:underline"
            >
              Email us
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
