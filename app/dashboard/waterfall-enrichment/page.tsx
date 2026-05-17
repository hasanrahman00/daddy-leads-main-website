"use client";

import { useState, FormEvent } from "react";
import { ExportFormCard, Field, TextInput } from "../_components/ExportFormCard";
import { ToggleSwitch } from "../_components/ToggleSwitch";
import { CsvUploader } from "../_components/CsvUploader";
import { TierGrid, Tier } from "../_components/TierCard";

const EMAIL_TIERS: Tier[] = [
  { id: "essential", name: "Essential",  price: "8¢",  per: "/ match",  features: ["3 providers", "Standard match rate"] },
  { id: "pro",       name: "Pro",        price: "15¢", per: "/ match",  features: ["6 providers", "Higher match rate"], badge: "POPULAR" },
  { id: "ultimate",  name: "Ultimate",   price: "22¢", per: "/ match",  features: ["8+ providers", "Highest match rate"] },
];

const MOBILE_TIERS: Tier[] = [
  { id: "essential", name: "Essential",  price: "12¢", per: "/ match",  features: ["3 providers", "US/EU coverage"] },
  { id: "pro",       name: "Pro",        price: "20¢", per: "/ match",  features: ["5 providers", "Global coverage"], badge: "POPULAR" },
  { id: "ultimate",  name: "Ultimate",   price: "35¢", per: "/ match",  features: ["8+ providers", "Verified live numbers"] },
];

export default function WaterfallEnrichmentPage() {
  const [mode, setMode] = useState("email");
  const [tier, setTier] = useState("pro");
  const [fileName, setFileName] = useState("");

  const tiers = mode === "email" ? EMAIL_TIERS : MOBILE_TIERS;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[waterfall]", { mode, tier, fileName });
    alert("Waterfall enrichment started.");
  }

  return (
    <ExportFormCard
      emoji="🌊"
      title="Waterfall Enrichment"
      subtitle="Cascade your CSV through 8+ providers in parallel. Highest-confidence match wins."
      onSubmit={onSubmit}
      remaining="50 leads remaining"
    >
      <Field label="Enrichment mode" required>
        <ToggleSwitch
          value={mode}
          onChange={(v) => { setMode(v); setTier("pro"); }}
          options={[
            { value: "email",  label: "Email Finder" },
            { value: "mobile", label: "Mobile Finder" },
          ]}
        />
      </Field>

      <Field
        label="Upload CSV"
        required
      >
        <CsvUploader
          maxSizeMb={50}
          maxRows={2500}
          requiredColumns={["First Name", "Last Name", "Company Domain"]}
        />
      </Field>

      <Field label="Output file name" required>
        <TextInput required value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="waterfall-saas-vp" />
      </Field>

      <Field label="Provider tier" required>
        <TierGrid tiers={tiers} value={tier} onChange={setTier} />
      </Field>
    </ExportFormCard>
  );
}
