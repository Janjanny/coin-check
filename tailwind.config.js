/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{sans: ['Poppins', 'sans-serif']},
      colors:{
        'white': '#ffffff',
        'black': '#0a0a0a',
        'gray-1': '#525252',
        'gray-2': '#333333',
        'gray-3': '#141414'
      }
    },
  },
  plugins: [],
}

