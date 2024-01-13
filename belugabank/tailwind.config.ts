import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "primary-blue": "#85C7DE",
      "secondary-blue": "##AED1E6",
      "bone-white": "#F9F6EE",
      "primary-orange": "#EC7000",
      "rich-black": "#011627",
      "light-pink": "#DB93B0",
      "text-gray": "#7A7786",
      "default-red": "#FF0000",
      "opacity-gray": "rgba(100, 80, 57, 0.1)",
    },
  },
};

export default config;
