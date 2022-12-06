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
        secondary: "#f81100",
        grey: "#5F6974",
        input: "#A7BAC5",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        scale: "scale 0.5s ease-in-out",
        fill: "fill 5s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(0.4)" },
          "100%": { transform: "scale(1)" },
        },
        fill: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      }),
    },
  },
  plugins: [],
};
