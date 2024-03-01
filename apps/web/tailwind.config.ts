import type { Config } from "tailwindcss";
import tailwindColors from "./src/styles/tw-extend/colors";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
  plugins: [],
};

export default config;
