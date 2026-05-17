"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui";

type FAQItem = { q: string; a: string };
type Category = { id: string; label: string; items: FAQItem[] };

const CATEGORIES: Category[] = [
  {
    id: "apollo",
    label: "Export Apollo",
    items: [
      { q: "How do I export an Apollo search?", a: "Paste your Apollo search URL into the dashboard, set verification thresholds, and hit export. We pull, dedupe, verify, and deliver the CSV — usually within minutes." },
      { q: "Will it use my Apollo credits?", a: "No. We don't burn your Apollo seat or credits. The export runs against our verified data warehouse with Apollo as the source-of-truth join." },
      { q: "How fresh is the data?", a: "Every export re-verifies in real time. Email landing rate consistently hits 98%+ on standard B2B lists." },
    ],
  },
  {
    id: "salesnav",
    label: "Export Sales Navigator",
    items: [
      { q: "Do I need my own Sales Nav account?", a: "Yes — we run the scrape through your authenticated session via our browser extension. Your cookies stay in your browser; we never proxy your account." },
      { q: "How many leads per search?", a: "Up to 10,000 per Sales Nav search URL. We handle pagination, retries, and rate-limit backoff automatically." },
      { q: "What gets returned?", a: "Name, title, company, LinkedIn URL, verified work email, and where available — mobile dial and intent signals." },
    ],
  },
  {
    id: "followers",
    label: "Export Followers",
    items: [
      { q: "Whose followers can I scrape?", a: "Any public LinkedIn or X account. Useful for competitor follower lists, creator audiences, or recent post engagers." },
      { q: "Are followers pre-qualified?", a: "Following a competitor or creator is one of the strongest intent signals available — these lists convert at 2-3× cold." },
      { q: "Refresh frequency?", a: "Schedule re-runs daily, weekly, or monthly. We delta against your last pull and only charge for net new." },
    ],
  },
  {
    id: "waterfall",
    label: "Waterfall Enrichment",
    items: [
      { q: "What does waterfall enrichment mean?", a: "We query six top providers in parallel for each lead. Highest-confidence match wins. Result: 98%+ landing rate vs. 85% on a single-source pull." },
      { q: "How much does it cost?", a: "From $0.03 per record. You only pay for successful matches — no charge if we can't find a verified address." },
      { q: "Can I bring my own list to enrich?", a: "Yes. Upload a CSV with at least name + company, and we'll waterfall every row." },
    ],
  },
  {
    id: "social-listening",
    label: "Social Listening",
    items: [
      { q: "What does keyword monitoring track?", a: "We scan LinkedIn posts, X threads, Reddit, and Hacker News for keywords you choose — and surface the author with full contact data." },
      { q: "Real-time or scheduled?", a: "Both. Get hourly digests via Slack or email, plus an instant ping when a high-priority keyword fires." },
      { q: "Can I exclude my own customers?", a: "Yes — upload a suppression list and we'll filter every result against it." },
    ],
  },
  {
    id: "social-enrichment",
    label: "Social Enrichment",
    items: [
      { q: "What social data do you pull?", a: "Avatars, headlines, recent posts, engagement counts, follower counts, and verified social handles across LinkedIn, X, and GitHub." },
      { q: "Is this real-time?", a: "Refreshed every 30 days on a rolling basis. Force a refresh per-lead any time at no extra cost." },
      { q: "Can I personalize sequences from this data?", a: "Absolutely — we expose recent post snippets as a merge field so your first line can reference what they actually wrote." },
    ],
  },
];

export function HomeFAQ() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section id="faq" className="py-20">
      <div className="container-x">
        <SectionHeader
          center
          kicker="FAQ"
          title="Questions, answered."
          sub="Pick a topic. If we missed something, drop us a line — humans reply."
        />

        <div className="mt-14 grid lg:grid-cols-[260px_1fr] gap-8">
          {/* category tabs */}
          <aside>
            <ul className="space-y-1">
              {CATEGORIES.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(c.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition ${
                        isActive
                          ? "bg-[color:var(--color-gold)]/12 text-[color:var(--color-gold)] font-semibold ring-1 ring-[color:var(--color-gold)]/30"
                          : "text-[color:var(--color-ink-muted)] hover:bg-gray-50 hover:text-[color:var(--color-ink)]"
                      }`}
                    >
                      {c.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* accordion */}
          <div>
            <Accordion.Root
              type="single"
              collapsible
              defaultValue={`${active.id}-0`}
              key={active.id}
              className="space-y-3"
            >
              {active.items.map((item, i) => (
                <Accordion.Item
                  key={`${active.id}-${i}`}
                  value={`${active.id}-${i}`}
                  className="card !p-0 overflow-hidden data-[state=open]:border-[color:var(--color-brand)]/40"
                >
                  <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/60 transition">
                    <span className="text-base font-semibold">{item.q}</span>
                    <ChevronDown className="size-5 text-[color:var(--color-ink-muted)] shrink-0 transition group-data-[state=open]:rotate-180 group-data-[state=open]:text-[color:var(--color-brand)]" />
                  </Accordion.Trigger>
                  <Accordion.Content className="accordion-content overflow-hidden">
                    <div className="px-6 pb-5 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                      {item.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
