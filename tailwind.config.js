/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: '', // true/false, 'media', or 'class'
  theme: {
    extend: {
      // primary: '#000000',
      // secondary: '#555555',
      // tetriary: '#999999',
      // gray: colors.slate,
    },
  },
  plugins: [],
}

