import type { Metadata } from "next";
import { Clock, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero, SectionHeader } from "@/components/ui";
import { FreeListForm } from "./FreeListForm";

export const metadata: Metadata = {
  title: "Free Lead List — Daddy Leads",
  description:
    "Tell us your ICP and we'll send you a free verified lead list within 24 hours. No credit card.",
};

const TRUST = [
  { icon: <Clock className="size-4" />, label: "Delivered in 24 hours" },
  { icon: <ShieldCheck className="size-4" />, label: "Verified emails" },
  { icon: <Sparkles className="size-4" />, label: "Claude-personalized" },
  { icon: <Zap className="size-4" />, label: "No credit card" },
];

export default function FreeListPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Free trial · No credit card · 24-hour delivery"
          title={
            <>
              Get your <span className="gradient-text">free lead list.</span>
            </>
          }
          sub="Tell us who you sell to. We'll send back a verified, enriched, ready-to-send sample list — within 24 hours. Try the engine before you order."
        />

        {/* trust strip */}
        <section className="-mt-2 pb-6">
          <div className="container-x">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[color:var(--color-ink-muted)]">
              {TRUST.map((t) => (
                <div key={t.label} className="inline-flex items-center gap-2">
                  <span className="text-[color:var(--color-gold)]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* form */}
        <section className="py-16">
          <div className="container-x max-w-3xl">
            <SectionHeader
              center
              kicker="Your brief"
              title="Send us your ICP."
              sub="Six fields. Sixty seconds. We'll do the rest."
            />
            <div className="mt-10">
              <FreeListForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
