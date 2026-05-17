"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui";

const ITEMS = [
  {
    q: "How Much Commission Do I Earn?",
    a: "You'll earn 10% commission for every paying customer you bring to Daddy Leads. So, if you bring a customer who spends $50, you get $5. Bring another who spends $200, and you'll make $20. The more you bring in, the more you earn!",
  },
  {
    q: "When Do I Get Paid?",
    a: "Once your commissions are earned, we'll verify and send out your payment the following month. Simple as that!",
  },
  {
    q: "How Long Do Cookies Last?",
    a: "We use cookies to keep track of your referrals. They last for 30 days after someone clicks your link. If they click again within that period, the 30-day timer restarts.",
  },
  {
    q: "Who Can I Refer?",
    a: "You can refer anyone who might find Daddy Leads helpful — friends, colleagues, anyone! Just not yourself or your coworkers.",
  },
  {
    q: "How Do I Get Paid?",
    a: "At the end of each month, your earnings are calculated and ready for cash-out through your chosen payment method.",
  },
  {
    q: "What If A Customer Asks For A Refund?",
    a: "If a customer requests a refund, it won't impact your commission. However, if it becomes a trend — like if most of the customers you refer end up requesting refunds after purchasing — then we may need to put a hold on your commission until we can look into it.",
  },
];

export function AffiliateFAQ() {
  return (
    <section className="py-16">
      <div className="container-x">
        <SectionHeader
          center
          kicker="FAQ"
          title="Everything you wanted to ask, in plain English."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="space-y-3">
            {ITEMS.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
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
    </section>
  );
}
