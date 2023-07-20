/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansNarrow: ["PT Sans Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
