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
        "primaryh": "var(--primaryh)",
        "secondary": "var(--secondary)",
        "secondaryh": "var(--secondaryh)",
        "accent": "var(--accent)",
        "logo": "var(--logo)",
      },
      transitionDuration: {
        '2000': '2000ms', 
        '1500': '1500ms',
        '1000': '1000ms',
        '500': '500ms'
        
      },
  
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

    
