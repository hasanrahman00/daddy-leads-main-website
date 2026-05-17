"use client";

import { UserProfile } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="kicker">Account</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Profile settings</h1>
        <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
          Manage your name, email, password, connected accounts, and active sessions.
        </p>
      </div>

      <UserProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: "w-full",
            cardBox: "shadow-card w-full max-w-none",
            card: "bg-white",
            navbar: "hidden md:flex",
            scrollBox: "bg-white",
            profileSectionPrimaryButton:
              "bg-gradient-to-b from-[#E0AD3B] to-[#C68F1E] text-white",
            formButtonPrimary:
              "bg-gradient-to-b from-[#E0AD3B] to-[#C68F1E] text-white",
          },
        }}
      />
    </div>
  );
}
