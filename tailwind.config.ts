import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        /* Primary Colors */
        orange: "#b45309",
        white: "#ffffff",
        black: "#000000",

        /* Neutral Colors */
        "light-grey": "#f5f5f5",
        "dark-grey": "#666666",

        /* Text Colors */
        "text-primary": "#000000",
        "text-secondary": "#666666",

        /* Semantic Status Colors */
        success: "#22c55e",
        warning: "#eab308",
        error: "#ef4444",
      },

      fontFamily: {
        "sans-serif": [
          "var(--font-sans-serif)",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },

      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },

      maxWidth: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },

      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
      },

      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },

      animation: {
        spin: "spin 1s linear infinite",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
    },
  },

  plugins: [],
};

export default config;
