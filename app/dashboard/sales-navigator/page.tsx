"use client";

import { useState, FormEvent } from "react";
import { ExportFormCard, Field, TextInput, Select } from "../_components/ExportFormCard";
import { ToggleSwitch } from "../_components/ToggleSwitch";
import { TierGrid, Tier } from "../_components/TierCard";

const TIERS: Tier[] = [
  {
    id: "exports-only",
    name: "Only Exports",
    price: "3¢",
    per: "/ lead",
    features: ["LinkedIn URL", "Name, title, company", "Location"],
  },
  {
    id: "exports-email",
    name: "Exports + Email Enrichment",
    price: "8¢",
    per: "/ lead",
    badge: "POPULAR",
    features: ["Everything in Only Exports", "Verified work email", "Single-provider enrichment"],
  },
  {
    id: "exports-waterfall",
    name: "Exports + Waterfall",
    price: "15¢",
    per: "/ lead",
    features: ["Everything in Email Enrichment", "8-provider waterfall", "Mobile dial included"],
  },
];

export default function SalesNavigatorPage() {
  const [mode, setMode] = useState("boomerang");
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [count, setCount] = useState("1000");
  const [tier, setTier] = useState("exports-email");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[sales nav export]", { mode, url, fileName, count, tier });
    alert(
      mode === "boomerang"
        ? "We'll handle the export end-to-end. Check email in 12–24h."
        : "Self-managed: download the helper extension to run this through your own session."
    );
  }

  return (
    <ExportFormCard
      emoji="💼"
      title="Sales Navigator Export"
      subtitle="Pull verified leads from any Sales Navigator search — list, account, or post engagement."
      onSubmit={onSubmit}
      remaining="50 leads remaining"
    >
      <Field label="Run mode" required>
        <ToggleSwitch
          value={mode}
          onChange={setMode}
          options={[
            { value: "boomerang", label: "Daddy Leads Managed" },
            { value: "self", label: "Self Managed" },
          ]}
        />
      </Field>

      <Field
        label="LinkedIn Sales Navigator URL"
        required
        hint="Paste a search, list, or account URL from sales nav."
      >
        <TextInput
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.linkedin.com/sales/search/people?..."
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="File name" required>
          <TextInput required value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="sn-vp-sales-saas" />
        </Field>
        <Field label="How many leads" required>
          <Select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="500">500 leads</option>
            <option value="1000">1,000 leads</option>
            <option value="2500">2,500 leads</option>
            <option value="5000">5,000 leads</option>
            <option value="10000">10,000 leads</option>
          </Select>
        </Field>
      </div>

      <Field label="Output tier" required>
        <TierGrid tiers={TIERS} value={tier} onChange={setTier} />
      </Field>
    </ExportFormCard>
  );
}
