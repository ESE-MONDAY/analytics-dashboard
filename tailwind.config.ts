// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color60: "#9CA4AB",
        body: "#26282C",
        mainColor: {
          secondary: "#0D062D",
          paid: "#34CAA5",
          refund: "#ED544E",
        },
        neutral: "#737373",
        gray: "#F5F5F5",
      },
      dark: {
        body: "#1A1A1A", // Dark mode background color
        color60: "#9CA4AB", // Dark mode color60
        neutral: "#737373", // Dark mode neutral color
        gray: "#F5F5F5", // Dark mode gray color
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
