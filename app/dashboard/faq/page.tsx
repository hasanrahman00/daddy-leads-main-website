"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQ = [
  {
    q: "How does the credit system work?",
    a: "Every service costs credits per 1,000 results. You subscribe at $10/month base, then buy credit buckets. Credits never expire while your subscription is active.",
  },
  {
    q: "What happens to my unused credits at the end of the month?",
    a: "They roll over as long as your subscription is active. Pause or cancel and you have 90 days to use what's left before the balance resets.",
  },
  {
    q: "Can I modify an order after I've submitted it?",
    a: "Within the first 15 minutes — yes, hit cancel from the Exports page and start a new one. After our pipeline has picked it up, you can't edit, but you can always run a fresh job.",
  },
  {
    q: "Do you include phone numbers?",
    a: "Only on Direct Dials and Waterfall (Mobile Finder mode). Sales Nav and Apollo exports return email-only by default.",
  },
  {
    q: "Do Daddy Leads credits work with Clay?",
    a: "Yes — we plug into Clay as a custom enrichment provider. Your Daddy Leads credits are spent against Clay runs the same way as a self-serve export.",
  },
  {
    q: "Are there any scraping limits?",
    a: "Self-managed Sales Nav runs through your own account, so LinkedIn's limits apply (typically 2,500/day). Daddy Leads Managed mode runs through our pool — effectively unlimited per ICP.",
  },
  {
    q: "Can I request a custom database build?",
    a: "Absolutely — that's our DFY Prospecting service. Send us your ICP and we deliver a verified list in 72 hours.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="kicker">Help center</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Frequently asked questions</h1>
        <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
          Everything users ask before they ask it. Missing something? Hit chat — bottom-right corner.
        </p>
      </div>

      <Accordion.Root type="single" collapsible defaultValue="q-0" className="space-y-3">
        {FAQ.map((item, i) => (
          <Accordion.Item
            key={item.q}
            value={`q-${i}`}
            className="card !p-0 overflow-hidden data-[state=open]:ring-[color:var(--color-gold)]/40"
          >
            <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/60 transition">
              <span className="text-base font-bold">{item.q}</span>
              <ChevronDown className="size-5 text-[color:var(--color-ink-mute)] shrink-0 transition group-data-[state=open]:rotate-180 group-data-[state=open]:text-[color:var(--color-gold)]" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content overflow-hidden">
              <div className="px-6 pb-5 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                {item.a}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <div className="mt-10 card !p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-[color:var(--color-gold)]/15 text-[color:var(--color-gold)] grid place-items-center ring-1 ring-[color:var(--color-gold)]/30">
            <MessageCircle className="size-5" />
          </div>
          <div>
            <div className="font-bold">Still stuck?</div>
            <div className="text-xs text-[color:var(--color-ink-muted)]">
              Real humans, real answers — usually within an hour.
            </div>
          </div>
        </div>
        <a href="mailto:contact@daddy-leads.com" className="btn-primary">
          Email us
        </a>
      </div>
    </div>
  );
}
