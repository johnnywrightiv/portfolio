/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        highlight: "rgba(var(--highlight))",
        tertiary: "rgba(var(--tertiary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
        linkedin: "rgba(var(--linkedin))",
      },
    },
  },
  plugins: [],
}