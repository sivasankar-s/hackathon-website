/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(9, 255, 0, 0.35)",
          "0 0px 65px rgba(9, 255, 0, 0.2)"
        ]
      },
      fontFamily: {
        orbitron: ['"Orbitron"', ...defaultTheme.fontFamily.sans],
        saira: ['"Saira Semi Condensed"', ...defaultTheme.fontFamily.sans],
        questrial: ['"Questrial"', ...defaultTheme.fontFamily.sans],
        russo: ['"Russo One"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}