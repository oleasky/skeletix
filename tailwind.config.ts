import type { Config } from "tailwindcss";
import barestyles from "barestyles";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/barebones/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
        serif: ['var(--font-roboto-slab)', 'Roboto Slab', 'serif'],
        h1: ['var(--font-roboto-slab)', 'Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [barestyles],
};
export default config;
