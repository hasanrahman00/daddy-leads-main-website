"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, FileSpreadsheet, X } from "lucide-react";

export function CsvUploader({
  maxSizeMb = 50,
  maxRows = 2500,
  requiredColumns = [],
  onFile,
}: {
  maxSizeMb?: number;
  maxRows?: number;
  requiredColumns?: string[];
  onFile?: (file: File) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handle(f: File | null) {
    setFile(f);
    if (f && onFile) onFile(f);
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handle(f);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) handle(f);
  }

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition ${
          dragging
            ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)]/5"
            : "border-[color:var(--color-line)] hover:border-[color:var(--color-gold)]/60 hover:bg-[color:var(--color-gold)]/[0.02]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv,text/csv"
          onChange={onChange}
          className="hidden"
        />

        {file ? (
          <div className="flex items-center justify-center gap-3">
            <FileSpreadsheet className="size-6 text-emerald-600" />
            <div className="text-left">
              <div className="text-sm font-bold">{file.name}</div>
              <div className="text-xs text-[color:var(--color-ink-muted)]">
                {(file.size / 1024).toFixed(1)} KB
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handle(null); }}
              className="size-7 grid place-items-center rounded-full hover:bg-gray-100 text-[color:var(--color-ink-muted)]"
              aria-label="Remove file"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="mx-auto size-12 rounded-full bg-[color:var(--color-gold)]/15 grid place-items-center text-[color:var(--color-gold)]">
              <Upload className="size-5" />
            </div>
            <div className="mt-4 text-sm font-bold">
              Drag &amp; drop your CSV
            </div>
            <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
              or <span className="text-[color:var(--color-gold)] font-semibold underline underline-offset-2">click to browse</span>
            </div>
            <div className="text-[11px] text-[color:var(--color-ink-mute)] mt-3">
              Max {maxSizeMb}MB · Up to {maxRows.toLocaleString()} rows · UTF-8 encoded
            </div>
          </>
        )}
      </div>

      {requiredColumns.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase font-display tracking-[0.18em] text-[color:var(--color-ink-mute)]">
            Required columns:
          </span>
          {requiredColumns.map((c) => (
            <span
              key={c}
              className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[color:var(--color-gold)]/15 text-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/30"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
