/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://frackcreations.com) */
const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const SITE_URL =
  (raw ? raw.replace(/\/$/, "") : null) ?? "https://frackcreations.com";
