/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        grey: {
          light: "#D9D9D9",
          DEFAULT: "#4C4D4F",
          dark: "#757575",
          border: "#B8B8B8",
        },
        green: {
          DEFAULT: "#4F7066",
          light: "#F3F7F5",
        },
      },
    },
  },
};
