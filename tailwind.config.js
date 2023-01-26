/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      keyframes: {
        'hover-navi-link': {
          '0%': { color: 'black' },
          '65%': { color: 'dodgerblue' },
          '100%': { color: 'black' },
        },
      },
      animation: {
        'hover-navi-link': 'hover-navi-link 1.82s ease-in-out infinite',
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

        'text': '#2a3a4a',

        'bg-grey': '#eeeeee',
      }
    },
  },
  plugins: [],
};
