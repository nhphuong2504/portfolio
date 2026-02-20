import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          muted: "#dbeafe",
          foreground: "#1e40af",
        },
        editorial: {
          foreground: "#0f172a",
          muted: "#475569",
          subtle: "#64748b",
          border: "#e2e8f0",
          background: "#f8fafc",
        },
      },
      borderRadius: {
        editorial: "0.375rem",
        card: "0.5rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover":
          "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
        header: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
      },
      ringWidth: {
        focus: "2px",
      },
      ringColor: {
        focus: "#2563eb",
      },
      transitionDuration: {
        ui: "150ms",
        "ui-slow": "250ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
