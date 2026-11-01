import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocaleAttributes from "@/components/LocaleAttributes";
import PackageContent from "@/components/PackageContent";
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

  return {
    title: { absolute: dict.packageOffer.metaTitle },
    description: dict.packageOffer.metaDescription,
    alternates: {
      canonical: `/${locale}/package`,
      languages: {
        en: `${SITE_URL}/en/package`,
        ar: `${SITE_URL}/ar/package`,
        es: `${SITE_URL}/es/package`,
        "x-default": `${SITE_URL}/en/package`,
      },
    },
    openGraph: {
      title: dict.packageOffer.metaTitle,
      description: dict.packageOffer.metaDescription,
      url: `${SITE_URL}/${locale}/package`,
    },
  };
}

export default async function PackagePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <LocaleProvider locale={locale as Locale} dict={dict}>
      <LocaleAttributes locale={locale as Locale} />
      <PackageContent />
    </LocaleProvider>
  );
}
