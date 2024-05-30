/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e7e7e7',
        secondary: '#121111',
        apple: {
          50: '#f1fdf0',
          100: '#ddfcdc',
          200: '#bdf7bb',
          300: '#89ef86',
          400: '#4dde4a',
          500: '#23b620',
          600: '#19a316',
          700: '#178015',
          800: '#176516',
          900: '#145315',
          950: '#052e06',
        },
      },
      spacing: {
        header: '78px',
      },
      gridTemplateColumns: {
        'solutions-grid': 'repeat(auto-fit,minmax(250px,1fr))',
        'gallery-grid': 'repeat(auto-fit,minmax(250px,450px))',
      },
      borderRadius: {
        custom: '4px',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

// 14a51e
