/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        mainLight: '#FAFBFD',
        darkLight: '#E1E6EA',
        darkerLight: '#ECECEC',
        lightDark: '#797979'
      },
    },
  },
  plugins: [],
}

