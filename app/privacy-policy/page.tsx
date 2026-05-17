import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { StatsCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy — Daddy Leads",
  description: "How Daddy Leads collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    n: "1.",
    h: "Information we collect",
    p: "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.",
  },
  {
    n: "2.",
    h: "Use of Information",
    p: "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.",
  },
  {
    n: "3.",
    h: "Sharing of Information",
    p: "We don't share any personally identifying information publicly or with third-parties, except when required to by law.",
  },
  {
    n: "4.",
    h: "Cookies",
    p: "Our website may use ‘cookies’ to enhance your experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.",
  },
  {
    n: "5.",
    h: "Third-party Links",
    p: "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
  },
  {
    n: "6.",
    h: "Acceptance",
    p: "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container-x">
            <article className="mx-auto max-w-3xl">
              <div className="kicker">Legal</div>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
                Last updated: May 17, 2026
              </p>

              <p className="mt-8 text-[color:var(--color-ink-muted)] text-lg leading-relaxed">
                Your privacy is important to us. It is Daddy Leads&apos; policy to respect
                your privacy regarding any information we may collect from you across
                our website,{" "}
                <a href="https://daddyleads.io" className="text-[color:var(--color-brand)] hover:underline">
                  https://daddyleads.io
                </a>
                , and other sites we own and operate.
              </p>

              <div className="mt-12 space-y-10">
                {SECTIONS.map((s) => (
                  <section key={s.n}>
                    <h2 className="text-xl md:text-2xl font-bold flex items-baseline gap-3">
                      <span className="text-[color:var(--color-brand)] font-mono text-base">{s.n}</span>
                      {s.h}
                    </h2>
                    <p className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">
                      {s.p}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-[color:var(--color-line)] text-sm text-[color:var(--color-ink-muted)]">
                Questions? Email{" "}
                <a href="mailto:contact@daddy-leads.com" className="text-[color:var(--color-brand)] hover:underline">
                  contact@daddy-leads.com
                </a>
                .
              </div>
            </article>
          </div>
        </section>

        <StatsCTA />
      </main>
      <Footer />
    </>
  );
}
