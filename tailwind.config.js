/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('./images/heroImage.png')",
      },
      fontFamily: {
        sansNarrow: ["PT Sans Narrow", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        delayedYellow: "#FCFE00",
        springGreen: "#39FF14",
        electricPurple: "#5501EE",
      },
    },
  },
  plugins: [],
};
