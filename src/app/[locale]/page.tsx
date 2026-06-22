import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocaleAttributes from "@/components/LocaleAttributes";
import HomeContent from "@/components/HomeContent";
import { LocaleProvider } from "@/context/LocaleContext";
import { locales, type Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const ogLocale =
    locale === "ar" ? "ar_SA" : locale === "es" ? "es_ES" : "en_US";

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        "ar-SA": `${SITE_URL}/ar`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale,
      alternateLocale: ["en_US", "ar_SA", "es_ES"].filter(
        (l) => l !== ogLocale
      ),
      url: `${SITE_URL}/${locale}`,
    },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <LocaleProvider locale={locale as Locale} dict={dict}>
      <LocaleAttributes locale={locale as Locale} />
      <HomeContent />
    </LocaleProvider>
  );
}
