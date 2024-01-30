import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "767.98px",
        lg: "991.98px",
        xl: "1230.98px",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        ref: ["Mulish", "sans-serif"],
      },

      boxShadow: {
        sm: "0px 4px 18px 0px rgba(0, 0, 0, 0.0784313725)",
      },

      fontSize: {
        "12": "12px",
        "14": "14px",
        "15": "15px",
        "16": "16px",
        "18": "18px",
        "30": "30px",
        "45": "45px",
      },
      colors: {
        primary: "#120A21",
        secondary: "#8E8E93",
        yellow: "#FFA920",
        blue: "#6E55FF",
        skin: "#fffcf7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
