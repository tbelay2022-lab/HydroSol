import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  // Deployment URL — switch to site.url once hydrosolpower.com points here
  metadataBase: new URL("https://hydrosol.vercel.app"),
  title: {
    default: "HydroSol — Power Everywhere. For Everyone.",
    template: "%s — HydroSol",
  },
  description:
    "HydroSol is a globally adaptable productive energy platform — distributed productive energy for sustainable development, strengthening households, agriculture, water, healthcare, education, enterprise, and mobility within one integrated framework. Productive Communities. Prosperous Futures.",
  openGraph: {
    title: "HydroSol — Power Everywhere. For Everyone.",
    description:
      "Distributed Productive Energy for Sustainable Development. Productive Communities. Prosperous Futures.",
    url: "https://hydrosol.vercel.app",
    siteName: "HydroSol",
    type: "website",
    images: [
      {
        url: "/figures/hs2-brand-banner.jpg",
        width: 1536,
        height: 1024,
        alt: "HydroSol — Power Everywhere. For Everyone. Circular · Scalable · Modular · Inclusive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroSol — Power Everywhere. For Everyone.",
    description:
      "Distributed Productive Energy for Sustainable Development. Productive Communities. Prosperous Futures.",
    images: ["/figures/hs2-brand-banner.jpg"],
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
