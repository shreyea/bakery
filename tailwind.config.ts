import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6EC",
        paper: "#FFFCF6",
        butter: "#F6E7BE",
        marigold: "#EDB43C",
        terracotta: "#A8472B",
        cocoa: { DEFAULT: "#2B1D15", soft: "#4B3A2E" },
        pista: "#DEE6CC",
        pistadeep: "#56703F",
        blush: "#F4DDD5",
        muted: "#6E5B4D",
        line: "#E9DDC7",
        wa: { DEFAULT: "#0F8F4B", dark: "#0B7A3F" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(43,29,21,.05), 0 10px 28px -14px rgba(43,29,21,.18)",
        lift: "0 2px 4px rgba(43,29,21,.06), 0 24px 48px -20px rgba(43,29,21,.28)",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        progress: "progress 6.5s linear forwards",
        "fade-up": "fadeUp .4s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
