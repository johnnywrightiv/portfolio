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
        "hero-bg": "rgba(var(--hero-bg))",
        "contact-bg": "rgba(var(--contact-bg))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        bubble: "rgba(var(--bubble))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        htag: "rgba(var(--htag))",
        ptag: "rgba(var(--ptag))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        linkedin: "rgba(var(--linkedin))"
      },
    },
  },
  plugins: [],
}