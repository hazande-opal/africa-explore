/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
    './index.html'],
  theme: {
    extend: {
      fontSize: {
        "md" : "2rem",
        "lg" : "3rem"
      },
      height: {
        '100' : "400px"
      },
      width: {
        'ch' : '14ch'
      }
    },
  },
  plugins: [],
}

