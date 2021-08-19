module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nanobloxGray: {
          light: "#36393e",
          DEFAULT: "#232428",
          dark: "#202123",
          darker: "#1a1b1e",
        },
        blurple: {
          DEFAULT: "#4e5d94",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
