/** Click-to-chat number for Meta ads and on-site CTAs (no leading +) */
export const WHATSAPP_NUMBER = "918106471131";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
