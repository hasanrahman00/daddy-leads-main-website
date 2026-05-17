"use client";

import { SignUp } from "@clerk/nextjs";

export function SignupForm() {
  return (
    <SignUp
      routing="hash"
      signInUrl="/login"
      fallbackRedirectUrl="/dashboard"
      appearance={{
        elements: {
          rootBox: "w-full",
          cardBox: "w-full shadow-none border-0",
          card: "bg-transparent shadow-none p-0 border-0",
          header: "hidden",
          footer: "hidden",
          dividerLine: "bg-[color:var(--color-line)]",
          dividerText: "text-[color:var(--color-ink-mute)]",
          socialButtonsBlockButton:
            "border border-[color:var(--color-line)] bg-white hover:bg-gray-50 text-[color:var(--color-ink)] font-semibold",
          formFieldLabel: "text-xs font-semibold text-[color:var(--color-ink)]",
          formFieldInput:
            "rounded-lg bg-white ring-1 ring-[color:var(--color-line)] focus:ring-2 focus:ring-[color:var(--color-gold)]/50 focus:border-[color:var(--color-gold)]",
          formButtonPrimary:
            "bg-gradient-to-b from-[#E0AD3B] to-[#C68F1E] hover:from-[#E8BD49] hover:to-[#C68F1E] text-white font-bold shadow-md ring-1 ring-[#C68F1E]/40",
          identityPreviewText: "text-[color:var(--color-ink)]",
          identityPreviewEditButton: "text-[color:var(--color-gold)]",
        },
        layout: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "blockButton",
        },
      }}
    />
  );
}
