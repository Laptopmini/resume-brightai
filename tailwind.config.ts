import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0a0e2c",
        "midnight-deep": "#050720",
        "midnight-card": "#11154a",
        paper: "#f4f5fb",
        "paper-muted": "#a4abd1",
        ink: "#10112d",
        "cyan-blue": "#0693e3",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-midnight": "var(--gradient-midnight)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-spectrum": "var(--gradient-spectrum)",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
} satisfies Config;
