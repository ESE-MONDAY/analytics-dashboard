import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        color60 : "#9CA4AB",
        body: "#26282C",
        mainColor: {
          secondary: "#0D062D",
          paid : "#34CAA5",
          refund: "#ED544E"
        },
        neutral : "#737373",
        gray : "#F5F5F5"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
