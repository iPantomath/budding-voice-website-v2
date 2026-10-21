/**
 * Central source of truth for Budding Voice's public contact details.
 *
 * Every consumer (Contact page, WhatsApp buttons, WhatsApp handoff) reads
 * from here rather than hardcoding values, so this is the only file that
 * needs to change.
 *
 * `whatsappNumber` is written in display format, including the country
 * code (e.g. "+60 12-258 8020"). WhatsApp links are generated from it by
 * `getWhatsAppUrl` in `@/lib/whatsapp`, which strips the spaces and symbols.
 *
 * Fields still `null` are pending confirmation from the Budding Voice team
 * (see docs/business-questionnaire.md).
 */
export const CONTACT_INFO = {
  phone: "+60 12-258 8020" as string | null,
  email: null as string | null,
  whatsappNumber: "+60 12-258 8020",
  operatingHours: null as string | null,
  social: null as string | null,
};

export const CONTACT_TBC_LABEL = "To be confirmed";
