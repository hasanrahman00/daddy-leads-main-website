"use client";

import { useState, FormEvent } from "react";
import { ExportFormCard, Field, TextInput, Select } from "../_components/ExportFormCard";
import { ToggleSwitch } from "../_components/ToggleSwitch";

export default function CompetitorFollowersPage() {
  const [mode, setMode] = useState("competitor");
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [count, setCount] = useState("1000");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[followers export]", { mode, url, fileName, count });
    alert("Export queued — we'll email you when it's ready.");
  }

  return (
    <ExportFormCard
      emoji="🥷"
      title="LinkedIn Competitor Followers"
      subtitle="Scrape the people following your competitor's company page — pre-qualified intent."
      onSubmit={onSubmit}
      credits="3.5 / 1k followers"
      remaining="50 leads remaining"
    >
      <Field label="Source type" required>
        <ToggleSwitch
          value={mode}
          onChange={setMode}
          options={[
            { value: "competitor", label: "Competitor Followers" },
            { value: "creator", label: "Creator Profile Followers" },
          ]}
        />
      </Field>

      <Field
        label={mode === "competitor" ? "Competitor company URL" : "Creator profile URL"}
        required
        hint={
          mode === "competitor"
            ? "Paste the LinkedIn URL of the company whose followers you want."
            : "Paste the LinkedIn profile URL of the creator."
        }
      >
        <TextInput
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={
            mode === "competitor"
              ? "https://www.linkedin.com/company/competitor"
              : "https://www.linkedin.com/in/creator-name"
          }
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="File name" required>
          <TextInput required value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="competitor-x-followers" />
        </Field>
        <Field label="How many followers" required>
          <Select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="500">500 followers</option>
            <option value="1000">1,000 followers</option>
            <option value="2500">2,500 followers</option>
            <option value="5000">5,000 followers</option>
            <option value="10000">10,000 followers</option>
          </Select>
        </Field>
      </div>
    </ExportFormCard>
  );
}
