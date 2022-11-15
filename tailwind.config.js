/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1px',
    },
    colors: {
      'card-border' : '#D7D7D7',
      'bg-color' : '#A02279',
      'text-hover' : '#A02279',
      'text-white' : '#FFFFFF',
      'bg-gray' : '#F5F5F5',
      'bg-black' : '#1D1D1E',
      'bg-connect' : '#FFFFFF'

    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        redrose: ['RedRose', 'cursive'],
      },
    },
  },
  plugins: [],
};
