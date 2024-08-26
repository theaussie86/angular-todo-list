const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",
  theme: {
    fontSize: {
      base: "18px",
    },
    extend: {
      colors: {
        // Primary
        brightBlue: "hsl(220, 98%, 61%)",
        checkBackgroundStart: "hsl(192, 100%, 67%)",
        checkBackgroundEnd: "hsl(280, 87%, 65%)",

        // Light Theme
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        // Dark Theme
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlueDark: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlueDark: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlueDark: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlueDarker: "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
