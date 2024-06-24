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
        "about-bg": "rgba(var(--about-bg))",
        "projects-bg": "rgba(var(--projects-bg))",
        "contact-bg": "rgba(var(--contact-bg))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        highlight: "rgba(var(--highlight))",
        htag: "rgba(var(--htag))",
        ptag: "rgba(var(--ptag))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        linkedin: "rgba(var(--linkedin))",
      },
    },
  },
  plugins: [],
}