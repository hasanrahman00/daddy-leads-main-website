"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: CalGlobal;
  }
}

type CalNamespaceApi = (...args: unknown[]) => void;
interface CalGlobal {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalNamespaceApi>;
  q?: unknown[];
}

export function CalEmbed() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Cal.com EU inline-embed bootstrap (verbatim from Cal's installation snippet,
    // wrapped in a typed IIFE so it plays nicely with strict mode).
    (function (C: Window, A: string, L: string) {
      const p = function (a: { q: unknown[] }, ar: IArguments) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        (function () {
          const calFn = function (this: unknown) {
            const cal = C.Cal!;
            const ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).setAttribute("src", A);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api: CalNamespaceApi & { q?: unknown[] } = function () {
                p(api as unknown as { q: unknown[] }, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns![namespace] = cal.ns![namespace] || api;
                p(cal.ns![namespace] as unknown as { q: unknown[] }, ar);
                p(cal as unknown as { q: unknown[] }, [
                  "initNamespace",
                  namespace,
                ] as unknown as IArguments);
              } else {
                p(cal as unknown as { q: unknown[] }, ar);
              }
              return;
            }
            p(cal as unknown as { q: unknown[] }, ar);
          };
          return calFn as unknown as CalGlobal;
        })();
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    const Cal = window.Cal!;
    Cal("init", "30min", { origin: "https://app.cal.eu" });

    Cal.ns!["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "hasan-rahman-jnr12q/30min",
    });

    Cal.ns!["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      theme: "light",
      styles: { branding: { brandColor: "#C68F1E" } },
      hideBranding: true,
    });
  }, []);

  return (
    <div
      id="my-cal-inline-30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
