/**
 * Central source of truth for Budding Voice's public contact details.
 *
 * All fields are `null` pending confirmation from the Budding Voice team
 * (see docs/business-questionnaire.md — address, WhatsApp number and email
 * exist there as candidates but are flagged as needing an explicit decision
 * before publishing; operating hours are not documented anywhere yet).
 *
 * Once real values are confirmed, replace the `null`s below — every
 * consumer (Contact page, WhatsApp handoff) reads from here rather than
 * hardcoding values, so this is the only file that needs to change.
 */
export const CONTACT_INFO = {
  phone: null as string | null,
  email: null as string | null,
  whatsappNumber: null as string | null,
  operatingHours: null as string | null,
  social: null as string | null,
};

export const CONTACT_TBC_LABEL = "To be confirmed";
