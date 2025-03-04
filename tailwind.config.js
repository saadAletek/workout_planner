/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark : '#404040',
        lightDark: '#575757',
        success : '#387443',
        inProgress : '#677438'
      },
    },
  },
  plugins: [],
}

