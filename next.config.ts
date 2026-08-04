import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Image Optimization */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  /* Performance */
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  /* Security and Headers */
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  /* Redirects */
  redirects: async () => {
    return [];
  },

  /* Rewrites */
  rewrites: async () => {
    return [];
  },
};

export default nextConfig;
