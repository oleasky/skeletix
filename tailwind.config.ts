import type { Config } from "tailwindcss";
import barestyles from "barestyles";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/barebones/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [barestyles],
};
export default config;
