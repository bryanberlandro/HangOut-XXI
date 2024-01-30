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
        'primary': '#18181b',
        'secondary': '#27272a',
        'tertiary': '#3f3f46',
        'btn': '#0ea5e9',
        'btn-focus': '#0284c7',
        'milk': '#FFFAFA'
      },
      boxShadow: {
        'soft': '0px 5px 50px rgba(0, 67, 101, 8%)',
        'multiple': '0 5px 50px rgba(0, 67, 101, 10%), 0 2px 6px rgba(0, 67, 101, 10%)'
      },
      animation: {
        'inEffect': 'inReveal .5s',
        'waveEffect': 'onWave 5s cubic-bezier(.55,.5,.45,.5)     infinite'
      },
      keyframes: {
        inReveal: {
          '0%': { transform: 'translateY(50px)'},
          '100%': { transform: 'translateY(0)'}
        },
        onWave: {
          '0%': { transform : 'translate3d(-90px,0,0)'},
          '100%': { transform : 'transform: translate3d(85px,0,0)' }
        }
      }
    },
  },
  plugins: [],
}

