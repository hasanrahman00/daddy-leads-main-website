"use client";

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SSOCallbackPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-[color:var(--color-page)]">
      <div className="text-center">
        <Loader2 className="mx-auto size-8 text-[color:var(--color-gold)] animate-spin" />
        <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
          Finishing sign-in…
        </p>
      </div>
      <AuthenticateWithRedirectCallback />
    </main>
  );
}
