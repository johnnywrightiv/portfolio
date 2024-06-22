/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      },
      customButton: 'flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200',
    },
  },
  plugins: [],
}