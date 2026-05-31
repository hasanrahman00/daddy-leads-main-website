import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daddy Leads — We make lead scraping f**cking easy",
  description:
    "Verified B2B leads from LinkedIn, Apollo, Maps and 8+ sources exported in one click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-page)] text-[color:var(--color-ink)]">
        <ClerkProvider
          afterSignOutUrl="/"
          appearance={{
            variables: {
              colorPrimary: "#C68F1E",
              colorText: "#1E1E2C",
              colorBackground: "#FFFFFF",
              borderRadius: "0.75rem",
              fontFamily: "var(--font-geist), system-ui, sans-serif",
            },
            elements: {
              formButtonPrimary:
                "bg-gradient-to-b from-[#E0AD3B] to-[#C68F1E] hover:from-[#E8BD49] hover:to-[#C68F1E] text-white shadow-md ring-1 ring-[#C68F1E]/40",
              footerActionLink: "text-[#C68F1E] hover:text-[#E0AD3B]",
              card: "shadow-card-lg ring-1 ring-[#C68F1E]/15",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
