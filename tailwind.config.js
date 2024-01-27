/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, sans-serif'
      },
      colors: {
        'primary': '#404258',
        'secondary': '#474E68',
        'tertiary': '#6B728E',
        'btn': '#3C7EFC',
        'milk': '#FFFAFA'
      },
      boxShadow: {
        'soft': '0px 5px 50px rgba(0, 67, 101, 8%)',
        'multiple': '0 5px 50px rgba(0, 67, 101, 10%), 0 2px 6px rgba(0, 67, 101, 10%)'
      }
    },
  },
  plugins: [],
}

