export const locales = ["en", "ar", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
  es: "ES",
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  es: "Español",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
