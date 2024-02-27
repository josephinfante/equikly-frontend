import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#663FAB',
        yellow: '#FFD700',
        'light-gray': '#595959',
        'dark-gray': '#404040'
      },
    },
  },
  plugins: [],
};
export default config;
