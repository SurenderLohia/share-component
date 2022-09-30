/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#1E1E1E',
        },
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
