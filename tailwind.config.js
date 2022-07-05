/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
