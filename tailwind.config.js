/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'primary-background': "#0f172a",
        'primary': "#fafafa",
        'secondary': "#1e40af",
        'secondary-background': '#142242'
      },
      fontFamily: {
        montserrat: 'Montserrat'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}