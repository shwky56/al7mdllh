/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {},
    screens: {
      'md': {'max': '926px'},
      'lg': {'max': '1080px'},
      
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1282px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
