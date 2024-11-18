import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "text1": "var(--text1)",
        "text1h": "var(--text1h)",
        "text2": "var(--text2)",
        "text3": "var(--text3)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "accent": "var(--accent)",
        "logo": "var(--logo)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
