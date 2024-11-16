import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        uiBackground: "#E3E7EE",
        uiBlue: "#007AFF",
        uiGray: "#707579",
        uiPurple: "#2400FF",
      },

      borderRadius: {
        "20px": "20px",
        "18px": "18px",
      },

      fontSize: {
        xxs: ["10px", "14px"],
        xs: ["13px", "16px"],
      },

      width: {
        uiFullWidth: "calc(100% - 20px)",
      },

      height: {
        "60px": "60px",
      },
    },
  },
  plugins: [],
};

export default config;
