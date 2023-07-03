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
        'jetbrains-mono' : ['JetBrains Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

