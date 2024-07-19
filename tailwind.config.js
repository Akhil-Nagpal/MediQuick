/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#59A52C",
        secondary: "#6FCA3A",
        accent: "#E6E6E6",
        background: "#FFFFFF",
        text: "#1E2022",
      },
    },
  },
  plugins: [],
};
// #59A52C - PRIMARY
// #6FCA3A - SECONDARY
// #E6E6E6 - ACCENT
// #FFFFFF - BACKGROUND
// #1E2022 - TEXT
