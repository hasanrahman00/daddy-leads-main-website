import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "700"],
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
      className={`${inter.variable} ${bebas.variable} ${playfair.variable} h-full antialiased font-sans`}
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
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
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
