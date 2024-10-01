/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D46868',
        darkBase : '#404040',
        darkDark : '#323232',
        darkLight : '#505050'
      },
    },
  },
  plugins: [],
}

