"use client";

import Link from "next/link";
import { CreditCard, Download, ArrowRight, Sparkles } from "lucide-react";

const INVOICES = [
  { id: "inv_0042", date: "May 1, 2026",  plan: "Growth + 1,500 credits", amount: "$35.00", status: "Paid" },
  { id: "inv_0033", date: "Apr 1, 2026",  plan: "Growth + 500 credits",   amount: "$20.00", status: "Paid" },
  { id: "inv_0024", date: "Mar 1, 2026",  plan: "Growth (free trial)",    amount: "$0.00",  status: "Comp" },
];

export default function BillingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <div className="kicker">Account</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Billing</h1>
        <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
          Plan, payment method, invoices. Cancel any time from here.
        </p>
      </div>

      {/* Current plan */}
      <div className="card !p-6 md:!p-8 ring-2 ring-[color:var(--color-gold)]/30">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-display tracking-widest text-[color:var(--color-gold)] bg-[color:var(--color-gold)]/10 ring-1 ring-[color:var(--color-gold)]/30 px-2.5 py-1 rounded-full">
              <Sparkles className="size-3" />
              CURRENT PLAN
            </div>
            <h2 className="mt-3 text-2xl font-extrabold">Growth · $10/mo + credits</h2>
            <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
              Renews on <strong>June 1, 2026</strong>. You have <strong className="text-[color:var(--color-gold)]">50 credits</strong> remaining.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link href="/dashboard/subscription" className="btn-primary">
              Buy more credits
              <ArrowRight className="size-4" />
            </Link>
            <button type="button" className="text-xs text-[color:var(--color-ink-mute)] hover:text-rose-600 transition">
              Cancel subscription
            </button>
          </div>
        </div>
      </div>

      {/* Payment method */}
      <div className="card !p-6">
        <h3 className="font-bold">Payment method</h3>
        <div className="mt-4 flex items-center justify-between p-4 rounded-xl ring-1 ring-[color:var(--color-line)]">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-[color:var(--color-page)] grid place-items-center text-[color:var(--color-ink-muted)]">
              <CreditCard className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-sm">Visa ending in •••• 4242</div>
              <div className="text-xs text-[color:var(--color-ink-muted)]">Expires 09 / 28</div>
            </div>
          </div>
          <button type="button" className="text-xs font-semibold text-[color:var(--color-gold)] hover:underline">
            Update
          </button>
        </div>
      </div>

      {/* Invoices */}
      <div className="card !p-0 overflow-hidden">
        <div className="p-5 border-b border-[color:var(--color-line)] flex items-center justify-between">
          <h3 className="font-bold">Invoices</h3>
          <span className="text-xs text-[color:var(--color-ink-muted)]">{INVOICES.length} on record</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-widest font-display text-[color:var(--color-ink-mute)] border-b border-[color:var(--color-line)]">
              <th className="px-5 py-3">Invoice</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Plan</th>
              <th className="px-5 py-3 text-right">Amount</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 w-12" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[color:var(--color-line)]">
            {INVOICES.map((inv) => (
              <tr key={inv.id} className="hover:bg-[color:var(--color-page)]">
                <td className="px-5 py-3 font-mono text-xs text-[color:var(--color-ink-muted)]">{inv.id}</td>
                <td className="px-5 py-3">{inv.date}</td>
                <td className="px-5 py-3 text-[color:var(--color-ink-muted)]">{inv.plan}</td>
                <td className="px-5 py-3 text-right tabular-nums font-semibold">{inv.amount}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full ring-1 ${
                    inv.status === "Paid"
                      ? "bg-emerald-100 text-emerald-700 ring-emerald-200"
                      : "bg-gray-100 text-gray-700 ring-gray-200"
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button className="size-8 grid place-items-center rounded-lg hover:bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]" aria-label="Download invoice">
                    <Download className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
