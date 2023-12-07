/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        //Default sans font was modified
        sans: "'Roboto', sans-serif",
        //New font was included
        'nasalization' : 'Nasalization',        
      },

      colors: {
        'portfolio-white' : '#FAFAFA',
      },

      width: {
        '100' : '30rem',
      },

    },
  },
  plugins: [],
}

