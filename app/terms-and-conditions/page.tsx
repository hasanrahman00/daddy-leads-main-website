import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { StatsCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions — Daddy Leads",
  description: "The legal terms governing your use of Daddy Leads.",
};

export default function TermsPage() {
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
                Terms and Conditions
              </h1>
              <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
                Last updated: May 17, 2026
              </p>

              <div className="mt-12 space-y-10">
                <Section n="1." h="Terms">
                  <p>
                    By accessing the website at{" "}
                    <a href="https://daddyleads.io" className="text-[color:var(--color-brand)] hover:underline">
                      https://daddyleads.io
                    </a>
                    , you are agreeing to be bound by these terms of service, all
                    applicable laws and regulations, and agree that you are
                    responsible for compliance with any applicable local laws. If
                    you do not agree with any of these terms, you are prohibited
                    from using or accessing this site. The materials contained in
                    this website are protected by applicable copyright and
                    trademark law.
                  </p>
                </Section>

                <Section n="2." h="Use License">
                  <p>
                    Permission is granted to temporarily download one copy of the
                    materials (information or software) on Daddy Leads&apos; website
                    for personal, non-commercial transitory viewing only. This is
                    the grant of a license, not a transfer of title, and under
                    this license you may not:
                  </p>
                  <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-[color:var(--color-brand)]">
                    <li>modify or copy the materials;</li>
                    <li>
                      use the materials for any commercial purpose, or for any
                      public display (commercial or non-commercial);
                    </li>
                    <li>
                      attempt to decompile or reverse engineer any software
                      contained on Daddy Leads&apos; website;
                    </li>
                    <li>
                      remove any copyright or other proprietary notations from
                      the materials; or
                    </li>
                    <li>
                      transfer the materials to another person or &ldquo;mirror&rdquo;
                      the materials on any other server.
                    </li>
                  </ul>
                  <p className="mt-4">
                    This license shall automatically terminate if you violate any
                    of these restrictions and may be terminated by Daddy Leads at
                    any time. Upon terminating your viewing of these materials or
                    upon the termination of this license, you must destroy any
                    downloaded materials in your possession whether in electronic
                    or printed format.
                  </p>
                </Section>

                <Section n="3." h="Disclaimer">
                  <p>
                    The materials on Daddy Leads&apos; website are provided on an
                    &lsquo;as is&rsquo; basis. Daddy Leads makes no warranties,
                    expressed or implied, and hereby disclaims and negates all
                    other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
                  </p>
                  <p className="mt-4">
                    Further, Daddy Leads does not warrant or make any
                    representations concerning the accuracy, likely results, or
                    reliability of the use of the materials on its website or
                    otherwise relating to such materials or on any sites linked
                    to this site.
                  </p>
                </Section>

                <Section n="4." h="Limitations">
                  <p>
                    In no event shall Daddy Leads or its suppliers be liable for
                    any damages (including, without limitation, damages for loss
                    of data or profit, or due to business interruption) arising
                    out of the use or inability to use the materials on Daddy
                    Leads&apos; website, even if Daddy Leads or a Daddy Leads
                    authorized representative has been notified orally or in
                    writing of the possibility of such damage.
                  </p>
                </Section>

                <Section n="5." h="Accuracy of materials">
                  <p>
                    The materials appearing on Daddy Leads&apos; website could
                    include technical, typographical, or photographic errors.
                    Daddy Leads does not warrant that any of the materials on its
                    website are accurate, complete, or current. Daddy Leads may
                    make changes to the materials contained on its website at any
                    time without notice. However, Daddy Leads does not make any
                    commitment to update the materials.
                  </p>
                </Section>

                <Section n="6." h="Links">
                  <p>
                    Daddy Leads has not reviewed all of the sites linked to its
                    website and is not responsible for the contents of any such
                    linked site. The inclusion of any link does not imply
                    endorsement by Daddy Leads of the site. Use of any such
                    linked website is at the user&apos;s own risk.
                  </p>
                </Section>

                <Section n="7." h="Modifications">
                  <p>
                    Daddy Leads may revise these terms of service for its website
                    at any time without notice. By using this website you are
                    agreeing to be bound by the then current version of these
                    terms of service.
                  </p>
                </Section>

                <Section n="8." h="Governing Law">
                  <p>
                    These terms and conditions are governed by and construed in
                    accordance with the laws of United States and you irrevocably
                    submit to the exclusive jurisdiction of the courts in that
                    State or location.
                  </p>
                </Section>
              </div>

              <div className="mt-16 pt-8 border-t border-[color:var(--color-line)] text-sm text-[color:var(--color-ink-muted)]">
                Questions about these terms? Email{" "}
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

function Section({
  n,
  h,
  children,
}: {
  n: string;
  h: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold flex items-baseline gap-3">
        <span className="text-[color:var(--color-brand)] font-mono text-base">{n}</span>
        {h}
      </h2>
      <div className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">
        {children}
      </div>
    </section>
  );
}
