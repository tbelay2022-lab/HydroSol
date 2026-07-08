import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HydroSol — Power Everywhere. For Everyone.",
    template: "%s — HydroSol",
  },
  description:
    "HydroSol is a distributed productive-energy platform designed to support productive activity in environments where conventional energy systems may become unavailable, unreliable, intermittent, or unaffordable.",
  openGraph: {
    title: "HydroSol — Power Everywhere. For Everyone.",
    description:
      "A distributed productive-energy platform supporting livelihoods, enterprise development, and sustainable community growth in underserved and last-mile environments.",
    url: site.url,
    siteName: "HydroSol",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
