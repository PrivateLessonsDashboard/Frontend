import type { Config } from "tailwindcss";
import tailwindColors from "@repo/theme/tw-extend/colors";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
  plugins: [],
};

export default config;
