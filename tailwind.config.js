/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      before: {
        content: '""',
      },
      colors: {
        primary: "#7856ff",
        light: "#798794",
        darkLight: "#1e2732",
      },
      backgroundColor: {
        dimBg: "#15202b",
        lightBg: "#273340",
      },
    },
  },
  plugins: [],
};
