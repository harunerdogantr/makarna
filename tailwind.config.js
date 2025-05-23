/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",
        secondary: "#D2691E",
        dark: "#3E2723",
        'dark-light': "#5D4037",
        'dark-gray': "#6D4C41",
        'cream-light': "#FFF5E6",
        'cream': "#FFE4C4",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'menu': '0 4px 20px rgba(139, 69, 19, 0.15)',
      }
    },
  },
  plugins: [],
} 