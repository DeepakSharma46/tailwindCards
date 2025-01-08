/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 5px 5px grey, 5px 5px 5px grey inset',
      },
      screens: {
        'small': '330px',
      },
    },
  },
  plugins: [],
}

