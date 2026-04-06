import type { Metadata, Viewport } from "next";
import { Inter, Phudu, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const interFixed = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const phudu = Phudu({
  variable: "--font-phudu",
  subsets: ["latin"],
  weight: ["800"],
  display: 'swap',
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Frack",
    default: "Frack - AI SaaS & UX/UI Design Agency | Custom Solutions, Faster Results",
  },
  description: "Transform your vision into exceptional digital experiences. We specialize in AI SaaS development, UX/UI design, design systems, and MVP sprints. Get results faster.",
  keywords: ["AI SaaS design", "UX UI design agency", "design systems", "MVP development", "prototyping", "mobile app design", "web app design", "branding"],
  openGraph: {
    title: "Frack - AI SaaS & UX/UI Design Agency",
    description: "Transform your vision into exceptional digital experiences.",
    type: "website",
    locale: "en_US",
    url: "https://frack.design",
    siteName: "Frack Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frack - AI SaaS & UX/UI Design Agency",
    description: "Transform your vision into exceptional digital experiences.",
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
        className={`${plusJakartaSans.variable} ${syne.variable} ${interFixed.variable} ${phudu.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-accent selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
