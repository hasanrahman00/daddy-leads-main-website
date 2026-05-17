"use client";

import { useState, FormEvent } from "react";
import { ExportFormCard, Field, TextInput, Select } from "../_components/ExportFormCard";

export default function CrunchbasePage() {
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [count, setCount] = useState("1000");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[crunchbase export]", { url, fileName, count });
    alert("Export queued. We'll email you when it's ready (12–24h).");
  }

  return (
    <ExportFormCard
      emoji="💰"
      title="Export Crunchbase"
      subtitle="Funded companies, founders, and hiring spikes — straight from Crunchbase."
      onSubmit={onSubmit}
      credits="4 / 1k rows"
      remaining="50 leads remaining"
      processingNote="Note: Contact exports return company data only. Emails are not included on Crunchbase exports — pair with Waterfall Enrichment afterward."
    >
      <Field
        label="Crunchbase URL"
        required
        hint="Paste a search, list, or hub URL."
      >
        <TextInput
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.crunchbase.com/search/..."
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="File name" required>
          <TextInput required value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="cb-saas-series-a" />
        </Field>
        <Field label="How many rows" required>
          <Select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="500">500 rows</option>
            <option value="1000">1,000 rows</option>
            <option value="2500">2,500 rows</option>
            <option value="5000">5,000 rows</option>
          </Select>
        </Field>
      </div>
    </ExportFormCard>
  );
}
