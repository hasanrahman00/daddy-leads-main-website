"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Download, MoreHorizontal, Plus, FileSpreadsheet } from "lucide-react";

const EXPORTS = [
  { id: "exp_8294", name: "apollo-saas-vp-marketing", source: "Apollo", rows: 1000, status: "Ready", date: "2 days ago", credits: 3 },
  { id: "exp_8211", name: "sn-vp-sales-saas", source: "Sales Nav", rows: 2500, status: "Processing", date: "5 hours ago", credits: 12.5 },
  { id: "exp_8190", name: "cb-saas-series-a", source: "Crunchbase", rows: 500, status: "Ready", date: "1 week ago", credits: 2 },
  { id: "exp_8124", name: "waterfall-saas-vp", source: "Waterfall", rows: 1200, status: "Ready", date: "1 week ago", credits: 18 },
  { id: "exp_8077", name: "competitor-x-followers", source: "Followers", rows: 1000, status: "Failed", date: "2 weeks ago", credits: 0 },
];

const STATUS_STYLE: Record<string, string> = {
  Ready:      "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Processing: "bg-amber-100 text-amber-700 ring-amber-200",
  Failed:     "bg-rose-100 text-rose-700 ring-rose-200",
};

export default function ExportsPage() {
  const [q, setQ] = useState("");
  const filtered = EXPORTS.filter((e) =>
    `${e.name} ${e.source}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="kicker">Activity</div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Exports</h1>
          <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
            Every list you&apos;ve scraped, enriched, or waterfalled. Download anytime.
          </p>
        </div>
        <Link href="/dashboard/apollo" className="btn-primary">
          <Plus className="size-4" />
          New Export
        </Link>
      </div>

      <div className="card !p-0 overflow-hidden">
        <div className="p-4 border-b border-[color:var(--color-line)] flex items-center gap-3">
          <div className="flex-1 max-w-sm relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[color:var(--color-ink-mute)]" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search exports…"
              className="w-full rounded-lg bg-[color:var(--color-page)] ring-1 ring-[color:var(--color-line)] pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/40"
            />
          </div>
          <div className="text-xs text-[color:var(--color-ink-muted)]">
            {filtered.length} of {EXPORTS.length}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest font-display text-[color:var(--color-ink-mute)] border-b border-[color:var(--color-line)]">
                <th className="px-4 py-3">File</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3 text-right">Rows</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Credits</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3 w-12" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--color-line)]">
              {filtered.map((e) => (
                <tr key={e.id} className="hover:bg-[color:var(--color-page)] transition">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <FileSpreadsheet className="size-4 text-[color:var(--color-gold)]" />
                      <div>
                        <div className="font-semibold">{e.name}</div>
                        <div className="text-[11px] text-[color:var(--color-ink-mute)] font-mono">{e.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-[color:var(--color-ink-muted)]">{e.source}</td>
                  <td className="px-4 py-3.5 text-right tabular-nums">{e.rows.toLocaleString()}</td>
                  <td className="px-4 py-3.5">
                    <span className={`inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full ring-1 ${STATUS_STYLE[e.status]}`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right tabular-nums text-[color:var(--color-ink-muted)]">{e.credits}</td>
                  <td className="px-4 py-3.5 text-[color:var(--color-ink-muted)]">{e.date}</td>
                  <td className="px-4 py-3.5 text-right">
                    {e.status === "Ready" ? (
                      <button className="size-8 grid place-items-center rounded-lg hover:bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]" aria-label="Download">
                        <Download className="size-4" />
                      </button>
                    ) : (
                      <button className="size-8 grid place-items-center rounded-lg hover:bg-gray-100 text-[color:var(--color-ink-mute)]" aria-label="More">
                        <MoreHorizontal className="size-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-[color:var(--color-ink-muted)]">
            No matches. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
}
