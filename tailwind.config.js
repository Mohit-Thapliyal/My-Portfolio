/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
        quicksand: "'Quicksand', sans-serif",
        edusa: "'Edu SA Beginner', cursive",
      }
    },
  },
  plugins: [],
}