import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionHeader, StatsCTA, PageHero } from "@/components/ui";
import { AffiliateFAQ } from "./AffiliateFAQ";

export const metadata: Metadata = {
  title: "Affiliate Program — Daddy Leads",
  description:
    "Earn 10% commission from every user that becomes a paid customer at Daddy Leads through your affiliate link.",
};

const STEPS = [
  {
    n: "01",
    label: "Step 1",
    title: "Join the Affiliate Program",
    body: "Click the link and create an account. There's no wait or approval time. Start earning in minutes!",
    cta: { label: "JOIN THE AFFILIATE PROGRAM", href: "#join" },
  },
  {
    n: "02",
    label: "Step 2",
    title: "Connect your PayPal/Wise account",
    body: "Daddy Leads affiliate program pays through PayPal/Wise. The payout is done 30 days after a user has purchased through your link.",
  },
  {
    n: "03",
    label: "Step 3",
    title: "Generate a link and earn 10% commission on any purchase",
    body: "Edit your link, click on 'Copy', share it with your audience & earn 10% commission from every buying customer that comes through your link.",
    cta: { label: "START EARNING NOW", href: "#join" },
  },
];

export default function AffiliatePage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Partner Program"
          title={
            <>
              Affiliate &amp; <span className="gradient-text">Referral Program</span>
            </>
          }
          sub="Earn 10% commission from every user that becomes a paid customer at Daddy Leads through your affiliate link."
          cta={{ href: "#join", label: "Join The Affiliate Program" }}
        />

        {/* 3-step */}
        <section className="py-16">
          <div className="container-x">
            <div className="grid md:grid-cols-3 gap-5">
              {STEPS.map((s) => (
                <article key={s.n} className="card relative flex flex-col min-h-[320px]">
                  <div
                    aria-hidden
                    className="absolute top-5 right-5 font-extrabold text-5xl leading-none text-[color:var(--color-gold)]/15"
                  >
                    {s.n}
                  </div>
                  <div className="kicker">{s.label}</div>
                  <h3 className="mt-2 text-xl font-bold pr-12 text-balance">{s.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] leading-relaxed flex-1">
                    {s.body}
                  </p>
                  {s.cta && (
                    <Link
                      href={s.cta.href}
                      className="btn-primary mt-6 self-start text-[11px] tracking-widest font-bold"
                    >
                      {s.cta.label}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <AffiliateFAQ />

        {/* Join CTA anchor target */}
        <section id="join" className="py-16">
          <div className="container-x">
            <div className="card text-center max-w-2xl mx-auto !p-10">
              <div className="kicker">Ready when you are</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-balance">
                Sign up — start earning within 5 minutes.
              </h2>
              <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
                No approval queue, no minimums. Drop your email and your dashboard is live.
              </p>
              <Link href="/dfy-prospecting" className="btn-primary btn-lg mt-7">
                Create my affiliate account
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <StatsCTA />
      </main>
      <Footer />
    </>
  );
}
