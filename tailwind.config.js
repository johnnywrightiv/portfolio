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
      colors:  {
        white: '#ffffff',  // can define as hex
        'true-black': '#000000', // define key as 'two-words'
        slate: colors.slate, // can define named from tailwind/colors
        grape: 'rbga(var(--grape))', // allows for rgba opacity in className when var is defined in index.css

        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
      }
    },
  },
  plugins: [],
}