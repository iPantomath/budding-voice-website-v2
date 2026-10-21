import { CONTACT_INFO } from "@/constants/contact";

const WHATSAPP_DIGITS = CONTACT_INFO.whatsappNumber.replace(/\D/g, "");

if (process.env.NODE_ENV !== "production" && !/^\d{8,15}$/.test(WHATSAPP_DIGITS)) {
  console.warn(
    `CONTACT_INFO.whatsappNumber "${CONTACT_INFO.whatsappNumber}" is not a valid international number. Include the country code, e.g. "+60 12-345 6789".`
  );
}

export function getWhatsAppUrl(message?: string): string {
  const url = `https://wa.me/${WHATSAPP_DIGITS}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}
