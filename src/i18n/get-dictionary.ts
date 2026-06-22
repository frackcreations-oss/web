import type { Locale } from "./config";
import { defaultLocale, isValidLocale } from "./config";
import en from "./dictionaries/en.json";
import ar from "./dictionaries/ar.json";
import es from "./dictionaries/es.json";

const dictionaries = { en, ar, es } as const;

export type Dictionary = typeof en;

export async function getDictionary(locale: string): Promise<Dictionary> {
  const resolved = isValidLocale(locale) ? locale : defaultLocale;
  return dictionaries[resolved];
}
