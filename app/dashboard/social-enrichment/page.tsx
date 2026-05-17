"use client";

import { useState, FormEvent } from "react";
import { ExportFormCard, Field, TextInput } from "../_components/ExportFormCard";
import { ToggleSwitch } from "../_components/ToggleSwitch";
import { CsvUploader } from "../_components/CsvUploader";

const TABS = [
  { value: "social-url", label: "Social URL" },
  { value: "comments",   label: "Comments" },
  { value: "reactions",  label: "Reactions" },
  { value: "post",       label: "Post" },
  { value: "activity",   label: "Activity" },
];

export default function SocialEnrichmentPage() {
  const [tab, setTab] = useState("social-url");
  const [fileName, setFileName] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[social enrich]", { tab, fileName });
    alert("Enrichment queued.");
  }

  return (
    <ExportFormCard
      emoji="💬"
      title="Social Enrichment"
      subtitle="Enrich a CSV of social activity — find the people behind comments, reactions, and post engagement."
      onSubmit={onSubmit}
      credits="5 / 1k leads"
      remaining="50 leads remaining"
    >
      <Field label="Enrichment type" required>
        <ToggleSwitch value={tab} onChange={setTab} options={TABS} />
      </Field>

      <Field
        label="Upload CSV"
        required
        hint="One row per record. Min 1 row, max 2,500."
      >
        <CsvUploader maxSizeMb={50} maxRows={2500} />
      </Field>

      <Field label="Output file name" required>
        <TextInput required value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="enriched-post-reactions" />
      </Field>
    </ExportFormCard>
  );
}
