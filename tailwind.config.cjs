/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        zinc: {
          950: '#0F0F12',
        },
      }
    },
  },
  plugins: [],
};
