"use client";

import { useState, FormEvent } from "react";
import { ExportFormCard, Field, TextInput, Select } from "../_components/ExportFormCard";

export default function ApolloPage() {
  const [listType, setListType] = useState("people");
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [count, setCount] = useState("1000");
  const [verifier, setVerifier] = useState("");
  const [scrapeMode, setScrapeMode] = useState("verified");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("[apollo export]", { listType, url, fileName, count, verifier, scrapeMode });
    alert("Export queued — you'll get an email when it's ready (12–24h).");
  }

  return (
    <ExportFormCard
      emoji="🚀"
      title="Export Apollo"
      subtitle="Bulk-export from any Apollo search URL — no credit burn, no manual clicks."
      onSubmit={onSubmit}
      credits="3 / 1k leads"
      remaining="50 leads remaining"
    >
      <Field label="List type" required>
        <Select value={listType} onChange={(e) => setListType(e.target.value)}>
          <option value="people">People search</option>
          <option value="companies">Company search</option>
          <option value="saved">Saved list</option>
        </Select>
      </Field>

      <Field
        label="Apollo search URL"
        required
        hint="Paste the URL from your Apollo search page (must be public or in your account)."
      >
        <TextInput
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://app.apollo.io/#/people?..."
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="File name" required>
          <TextInput required value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="apollo-saas-vp-marketing" />
        </Field>
        <Field label="How many leads" required>
          <Select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="250">250 leads</option>
            <option value="500">500 leads</option>
            <option value="1000">1,000 leads</option>
            <option value="2500">2,500 leads</option>
            <option value="5000">5,000 leads</option>
            <option value="10000">10,000 leads</option>
          </Select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Email verification" hint="Skip if your list is already verified.">
          <Select value={verifier} onChange={(e) => setVerifier(e.target.value)}>
            <option value="">Don&apos;t verify</option>
            <option value="leadmagic">LeadMagic</option>
            <option value="millionsverifier">MillionsVerifier</option>
          </Select>
        </Field>
        <Field label="Scraping mode">
          <Select value={scrapeMode} onChange={(e) => setScrapeMode(e.target.value)}>
            <option value="verified">Apollo Verified Emails only</option>
            <option value="all">All Data (no verification)</option>
          </Select>
        </Field>
      </div>
    </ExportFormCard>
  );
}
