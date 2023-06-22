/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
          light: {
            1 : "#f5ddd8",
            2 : "#a03f28",
            3 : "#f9e09f",
            4 : "#85736f",
            5 : "#f6f2f6",
            6 : "#faf1f4"
          }
      }
    },
  },
  plugins: [],
}

