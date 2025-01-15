/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        white: "#F3EFE0",
        black: "#07050D",
        "primary-purple": {
          200: "#BC78EC",
          800: "#5B2667",
          900: "#3B2667",
        },
        grey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
