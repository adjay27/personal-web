/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0D1926",
        light: "#f7f7f7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
