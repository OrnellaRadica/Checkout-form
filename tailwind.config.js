/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6E41E2",
        "primary-dark": "#5d36c0",
        grey: "#5F6974",
        input: "#A7BAC5",
      },
    },
  },
  plugins: [],
};
