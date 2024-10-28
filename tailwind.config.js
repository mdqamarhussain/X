/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      screens: {
        '1920x592': { 'raw': '(min-width: 1920px) and (min-height: 592px)' },
      },
      fontSize: {
        'userFont': '15px',
      },
    },
  },
  plugins: [],
}
