/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'pacifico' : ['Pacifico', 'cursive'],
        'mosk' : ['Mosk', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

