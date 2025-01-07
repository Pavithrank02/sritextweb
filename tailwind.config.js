/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBgColor: {
          bg: '#FBFCF1',
          DEFAULT: '#068343',
          dark: 'black'
          
        },
        customTextColor: {
          DEFAULT: '#068343',
          light: '#23C55F',
          dark: 'black'
          
        },
        customBorderColor: {
          DEFAULT: '#068343',
          light: '',
          

          
        },
      },
    },
  },
  plugins: [],
}