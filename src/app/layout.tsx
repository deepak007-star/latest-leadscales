import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyPhoneBar from "@/components/layout/StickyPhoneBar";
import FloatingCTA from "@/components/layout/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeadScale | Marketing & Lead Generation for Contractors",
  description:
    "LeadScale delivers more calls, more leads, and more revenue for contractors. SEO, Paid Ads, Web Design, GMB & Email Marketing. Get your free strategy call.",
  keywords:
    "contractor marketing, lead generation, HVAC marketing, plumber marketing, roofing leads, digital marketing for contractors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-body antialiased bg-neutral-50 text-neutral-800`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyPhoneBar />
        <FloatingCTA />
      </body>
    </html>
  );
}
