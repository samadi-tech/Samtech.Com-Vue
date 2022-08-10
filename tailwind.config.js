/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["inter", "sans-serif"],
        sriraca: ["Sriracha", "Handwriting"],
      },
      colors: {
        primary: "#e2e8f0",
        dark: "#1f2937",
        secondary: "#2563eb",
      },
    },
  },
  plugins: [],
};
