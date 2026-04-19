import type { Metadata, Viewport } from "next";
import { Inter, Phudu, Syne, Plus_Jakarta_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";

const interFixed = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const phudu = Phudu({
  variable: "--font-phudu",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A0A0A",
};

const titleDefault =
  "Frack — Web & e‑commerce development | تطوير مواقع ومتاجر إلكترونية";

const descriptionDefault =
  "Frack designs and builds web apps, SaaS, and e‑commerce stores. " +
  "Serving startups and teams worldwide, including Saudi Arabia & the Gulf. " +
  "فراك: تصميم وتطوير مواقع إلكترونية، متاجر إلكترونية، وتطبيقات ويب احترافية في السعودية والخليج — " +
  "تطوير مواقع، برمجة مواقع، تطوير متاجر إلكترونية، تصميم واجهات.";

const keywords = [
  "web development",
  "e‑commerce development",
  "website development",
  "UX UI design",
  "SaaS design",
  "تطوير مواقع",
  "تطوير مواقع إلكترونية",
  "تطوير متاجر إلكترونية",
  "تصميم مواقع",
  "برمجة مواقع",
  "شركة تطوير مواقع السعودية",
  "تصميم متجر إلكتروني",
  "إنشاء موقع إلكتروني",
  "السعودية",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Frack",
    default: titleDefault,
  },
  description: descriptionDefault,
  keywords,
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: titleDefault,
    description: descriptionDefault,
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: SITE_URL,
    siteName: "Frack",
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${syne.variable} ${interFixed.variable} ${phudu.variable} ${notoSansArabic.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-accent selection:text-white`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
