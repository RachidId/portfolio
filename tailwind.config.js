/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main': '#FF9C00',
      'gray': '#FBF9F8',
      'gray-secondary': '#F9F2EF'
    },
  },
  plugins: [],
}