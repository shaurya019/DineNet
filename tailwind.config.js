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
          gallery:"#EBEBEB",
          matterhorn:"#4D4949",
          sixtysix:"#A8A8A8",
          cadet:"#9EA3AD",
        },
        blue:{
          bright:"#1565C0",
          dark: "#082338CC",
          oxford: "#263238",
          pantone:"#216287"
        },
        green: {
          DEFAULT: "#4F7066",
          light: "#F3F7F5",
          mintcream:'#F3F7F5',
          mineral:"#3B544C",
          willam:"#4f7065",
          japanese:"#60A563",
          arapawa:"#2E6154",
          arapawashade:"#2E615470",
          salad:"#4CAF5021",
          finn:"#8EB6AA66",
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
        whiteSmoking:{
          DEFAULT: "#F6F1F1",
        },
        firefly:{
          DEFAULT: "#334841",
        },
        laurel:{
          DEFAULT: "#668E82",
        },
        red:{
          light:'#F6F6F6',
          dark:'#C70202',
          warm:'#E8505B',
        },
      },
    },
  },
};
