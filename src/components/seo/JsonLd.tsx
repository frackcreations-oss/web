import { SITE_URL } from "@/lib/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Frack",
  url: SITE_URL,
  description:
    "Design and development studio for web apps, SaaS, and e‑commerce. Serving clients worldwide in English, Arabic, and Spanish.",
  slogan: "Design that ships. Software that scales.",
  knowsLanguage: ["English", "Arabic", "Spanish"],
  areaServed: [
    { "@type": "Place", name: "Worldwide" },
  ],
  telephone: "+918106471131",
  sameAs: [
    "https://www.instagram.com/frackcreations/",
    "https://www.linkedin.com/company/frack-creations",
    "https://x.com/CreationsF91542",
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
  inLanguage: ["en", "ar", "es"],
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "ContactAction",
    target: "https://wa.me/918106471131",
    name: "Chat on WhatsApp",
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
