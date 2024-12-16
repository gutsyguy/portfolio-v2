import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundPosition:{
        "navbar": "center 1rem"
      },
      transform:{
        // "rotate": "rotate(90deg)"
      },
      rotate: {
        '90': '90deg',
        '-90': '-90deg',
      },
    },
  },
  plugins: [],
} satisfies Config;
