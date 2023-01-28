/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      keyframes: {
        'hover-navi-link': {
          '0%': { color: 'black' },
          '45.8%': { color: 'dodgerblue' },
          '100%': { color: 'black' },
        },
        'btn-wave': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(.84) '},
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'hover-navi-link': 'hover-navi-link 2.22s ease-in-out infinite',
        'btn-wave': 'btn-wave .9s ease-in-out',
      },
      colors: {
        'primary':     '#008080',
        'primary-100': '#299595',
        'primary-200': '#51a9a9',
        'primary-300': '#66b4b3',
        'primary-400': '#8fc9c8',
        'primary-500': '#b7dddc',
        'primary-600': '#ccc8e7',
        'primary-700': '#e0f2f1',

        'black': '#2a3a4a',
        'white': '#000000',

        'bg-grey': '#eeeeee',
      },
      minWidth: {
        'logo-min': '48px',
        'search-box': '210px',
      },
      maxWidth: {
        'logo-max': '48px',
        'search-box': '490px',
      },
      minHeight: {
        'logo-min': '32px',
      },
      maxHeight: {
        'logo-max': '32px',
      },
      height: {
        'navigator-height': '60px',
      }
    },
  },
  plugins: [],
};
