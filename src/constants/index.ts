export const SITE_CONFIG = {
  name: "Budding Voice",
  description:
    "Communication & Leadership Centre helping students discover their voice, build confidence, and grow with purpose.",
  url: "https://budding-voice.com",
  locale: "en_MY",
  timezone: "Asia/Kuala_Lumpur",
  /**
   * Placeholder image used for og:image/twitter:image and programme visual
   * boxes until real Budding Voice photography is available (Phase 4).
   * Replace this single path once real assets exist — every page reads it
   * from here rather than hardcoding it.
   */
  placeholderImage: "/programme-visual-v2.webp",
};

export const COLORS = {
  primary: "#ff8c00", // Orange
  white: "#ffffff",
  black: "#000000",
  lightGrey: "#f5f5f5",
  darkGrey: "#666666",
  textPrimary: "#000000",
  textSecondary: "#666666",
};

export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
};

export const MAX_WIDTH = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Schools", href: "/schools" },
  { label: "Corporate", href: "/corporate" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const BREAKPOINTS = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
};

export const UI_COLORS = {
  primary: "orange",
  primaryHover: "orange",
  background: "white",
  text: "black",
  textSecondary: "dark-grey",
};
