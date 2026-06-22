"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { useDictionary, useLocale } from "@/context/LocaleContext";

export default function LanguageSwitcher({ compact }: { compact?: boolean }) {
  const locale = useLocale();
  const dict = useDictionary();
  const pathname = usePathname();

  const basePath =
    pathname.replace(/^\/(en|ar|es)(?=\/|$)/, "") || "";

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-[#1F1F1F] bg-[#0A0A0A]/80 p-1"
      role="group"
      aria-label={dict.language.label}
    >
      {locales.map((code) => {
        const href = `/${code}${basePath}`;
        const active = locale === code;
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code === "ar" ? "ar-SA" : code === "es" ? "es" : "en"}
            className={`min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-center text-[11px] font-bold tracking-wide transition-colors ${
              active
                ? "bg-[#C8FF00] text-[#080808]"
                : "text-[#888888] hover:text-[#F5F5F5] hover:bg-white/5"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {compact ? localeNames[code as Locale] : localeNames[code as Locale]}
          </Link>
        );
      })}
    </div>
  );
}
