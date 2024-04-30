/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#313EF7',
        'secondary': '#030522',
        'light-secondary': 'rgba(3, 5, 34, 0.65)',
        'dark': '#030303',
        "dark-dark": "#1B1B1C",
        "dark-blue": '#011736',
        'light': '#AEB5BF',
        'light-blue': "rgba(49, 62, 247, 0.05)",
        'light-nav': "#A7A7A7"
      },

    },
  },
  plugins: [],
}

