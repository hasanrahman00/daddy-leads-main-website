"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import {
  Search, Bell, Menu, X, Sparkles, Gift, ChevronDown,
} from "lucide-react";

import { Logo } from "@/components/ui";
import { PromoBanner } from "./PromoBanner";

type NavItem = { href: string; label: string; emoji: string; badge?: string };

const NAV_SOURCES: NavItem[] = [
  { href: "/dashboard/apollo",               label: "Apollo",                emoji: "🚀" },
  { href: "/dashboard/crunchbase",           label: "Crunchbase",            emoji: "💰" },
  { href: "/dashboard/sales-navigator",      label: "Sales Navigator",       emoji: "💼" },
  { href: "/dashboard/competitor-followers", label: "Competitor Followers",  emoji: "🥷" },
  { href: "/dashboard/social-enrichment",    label: "Social Enrichment",     emoji: "💬" },
  { href: "/dashboard/waterfall-enrichment", label: "Waterfall Enrichment",  emoji: "🌊" },
];

const NAV_ACTIVITY: NavItem[] = [
  { href: "/dashboard/exports", label: "Exports", emoji: "📥" },
];

const NAV_ACCOUNT: NavItem[] = [
  { href: "/dashboard/rewards",      label: "Rewards",      emoji: "🎁", badge: "New" },
  { href: "/dashboard/subscription", label: "Subscription", emoji: "💳" },
  { href: "/dashboard/faq",          label: "FAQ",          emoji: "❓" },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const credits = 50; // TODO: read from user metadata / DB
  const pathname = usePathname();
  const settingsOpen = pathname.startsWith("/dashboard/settings");

  return (
    <div className="min-h-screen flex bg-[color:var(--color-page)]">
      {/* ─── Sidebar ─── */}
      <aside
        className={`fixed lg:sticky lg:top-0 lg:translate-x-0 z-40 w-64 h-screen border-r border-[color:var(--color-line)] bg-white transition-transform duration-200 flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-16 px-5 flex items-center justify-between border-b border-[color:var(--color-line)] shrink-0">
          <Link href="/dashboard" className="flex items-center gap-2" aria-label="Daddy Leads">
            <Logo size="sm" />
            <span className="font-bold text-sm tracking-tight">daddyleads</span>
          </Link>
          <button type="button" onClick={() => setMobileOpen(false)} className="lg:hidden text-[color:var(--color-ink-mute)]" aria-label="Close menu">
            <X className="size-5" />
          </button>
        </div>

        <nav className="px-3 py-4 space-y-6 overflow-y-auto flex-1">
          <NavGroup label="Services" items={NAV_SOURCES} />
          <NavGroup label="Activity" items={NAV_ACTIVITY} />
          <NavGroup label="Account" items={NAV_ACCOUNT} />

          {/* Settings — expandable */}
          <div>
            <div className="px-3 text-[10px] uppercase font-display tracking-[0.22em] text-[color:var(--color-ink-mute)] mb-2">
              Settings
            </div>
            <details open={settingsOpen} className="group">
              <summary className="list-none cursor-pointer flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[color:var(--color-ink-muted)] hover:bg-gray-50 hover:text-[color:var(--color-ink)] transition">
                <span className="text-base shrink-0">⚙️</span>
                <span className="flex-1">Settings</span>
                <ChevronDown className="size-3.5 transition group-open:rotate-180" />
              </summary>
              <ul className="mt-1 pl-6 space-y-0.5">
                <SubLink href="/dashboard/settings" label="Profile" />
                <SubLink href="/dashboard/settings/billing" label="Billing" />
              </ul>
            </details>
          </div>
        </nav>

        <div className="p-3 border-t border-[color:var(--color-line)] shrink-0">
          <div className="rounded-xl bg-gradient-to-br from-[color:var(--color-gold)]/15 to-[color:var(--color-purple)]/10 ring-1 ring-[color:var(--color-gold)]/30 p-3">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Sparkles className="size-3.5 text-[color:var(--color-gold)]" />
              Pro perks
            </div>
            <p className="mt-1 text-[11px] text-[color:var(--color-ink-muted)]">Unlimited sources, larger lists, priority support.</p>
            <Link href="/dashboard/subscription" className="mt-2.5 block text-center text-[10px] font-bold tracking-widest uppercase text-[color:var(--color-gold)] hover:underline">
              Upgrade →
            </Link>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-sm" />
      )}

      {/* ─── Main column ─── */}
      <div className="flex-1 min-w-0 flex flex-col">
        <PromoBanner />

        <header className="sticky top-0 z-20 h-16 bg-white/85 backdrop-blur-md border-b border-[color:var(--color-line)]">
          <div className="h-full px-4 md:px-6 flex items-center gap-3">
            <button type="button" onClick={() => setMobileOpen(true)} className="lg:hidden text-[color:var(--color-ink-muted)]" aria-label="Open menu">
              <Menu className="size-5" />
            </button>

            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[color:var(--color-ink-mute)] pointer-events-none" />
              <input type="search" placeholder="Search exports, lists, leads…" className="w-full rounded-lg bg-[color:var(--color-page)] ring-1 ring-[color:var(--color-line)] pl-9 pr-3 py-2 text-sm placeholder:text-[color:var(--color-ink-mute)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]/40 focus:bg-white transition" />
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              {/* Credits balance */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--color-gold)]/10 ring-1 ring-[color:var(--color-gold)]/30 text-[color:var(--color-gold)]">
                <span className="text-sm">🪙</span>
                <span className="text-xs font-bold tabular-nums">{credits}</span>
                <span className="text-[10px] uppercase tracking-widest font-display">cred</span>
              </div>

              {/* Get More Credits — orange-ish gold CTA */}
              <Link
                href="/dashboard/subscription"
                className="inline-flex items-center gap-1.5 rounded-full px-3 md:px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-sm ring-1 ring-orange-500/30 transition"
              >
                <Gift className="size-3.5" />
                <span className="hidden md:inline">Get More Credits</span>
                <span className="md:hidden">Top up</span>
              </Link>

              <button type="button" className="relative size-9 rounded-lg grid place-items-center text-[color:var(--color-ink-muted)] hover:bg-gray-100 transition" aria-label="Notifications">
                <Bell className="size-4" />
                <span className="absolute top-1.5 right-2 size-1.5 rounded-full bg-rose-500" />
              </button>

              <UserButton appearance={{ elements: { avatarBox: "size-9" } }} />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}

function NavGroup({ label, items }: { label: string; items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <div>
      <div className="px-3 text-[10px] uppercase font-display tracking-[0.22em] text-[color:var(--color-ink-mute)] mb-2">
        {label}
      </div>
      <ul className="space-y-0.5">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                  active
                    ? "bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)] font-semibold ring-1 ring-[color:var(--color-gold)]/30"
                    : "text-[color:var(--color-ink-muted)] hover:bg-gray-50 hover:text-[color:var(--color-ink)]"
                }`}
              >
                <span className="text-base shrink-0">{item.emoji}</span>
                <span className="flex-1 truncate">{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500 text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SubLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <li>
      <Link href={href} className={`block px-3 py-1.5 rounded text-xs transition ${
        active
          ? "text-[color:var(--color-gold)] font-semibold"
          : "text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
      }`}>
        {label}
      </Link>
    </li>
  );
}
