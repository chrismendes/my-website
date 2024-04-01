import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": {
          DEFAULT: colors.teal[700],
          dark: colors.teal[800],
          light: colors.teal[50],
        }
      }
    }
  },
  plugins: [],
};
export default config;
