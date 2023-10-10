/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        popin:['Poppins', 'sans-serif'],
        josef:['Josefin Sans','sans-serif'],
      }
    },
  },
  plugins: [],
}

