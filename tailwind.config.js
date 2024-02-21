/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["8px"],
      },
      fontFamily: {
        MontserratMedium: ["MontserratMedium", "sans-serif"],
        MontserratRegular: ["MontserratRegular", "sans-serif"],
        MontserratSemiBold: ["MontserratSemiBold", "sans-serif"],
        MontserratThin: ["MontserratThin", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        grey: {
          light: "#D9D9D9",
          approxLight:'#D5D5D5',
          DEFAULT: "#4C4D4F",
          dark: "#757575",
          border: "#B8B8B8",
          granite:'#5D5D5D',
        },
        blue:{
          dark: "#082338CC",
        },
        green: {
          DEFAULT: "#4F7066",
          light: "#F3F7F5",
          mintcream:'#F3F7F5',
          mineral:"#3B544C",
          willam:"#4f7065"
        },
        greenCyan: {
          DEFAULT: "#4E7065",
        },
        silver: {
          DEFAULT: "#c4c4c4",
          light: "#D8D8D8",
        },
        whiteSmoke:{
          DEFAULT: "#F5F5F5",
        },
        firefly:{
          DEFAULT: "#334841",
        },
        laurel:{
          DEFAULT: "#668E82",
        }
      },
    },
  },
};
