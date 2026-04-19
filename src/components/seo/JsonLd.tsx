import { SITE_URL } from "@/lib/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Frack",
  url: SITE_URL,
  description:
    "Design and development studio for web apps, SaaS, and e‑commerce. English & Arabic-speaking clients — including Saudi Arabia.",
  slogan: "Design that ships. Software that scales.",
  knowsLanguage: ["English", "Arabic"],
  areaServed: [
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Place", name: "Middle East" },
  ],
  serviceType: [
    "Web development",
    "E‑commerce development",
    "UX/UI design",
    "تطوير مواقع",
    "تطوير متاجر إلكترونية",
    "تصميم مواقع",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Frack",
  inLanguage: ["en", "ar-SA"],
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "ContactAction",
    target: `${SITE_URL}/#booking`,
    name: "Book intro call",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
