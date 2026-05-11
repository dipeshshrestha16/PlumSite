/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0B4F8A', 500: '#0B4F8A', 600: '#083F70' },
        secondary: { DEFAULT: '#00A6D6' },
        accent: { DEFAULT: '#F97316' },
        surface: '#0B4F8A',
      },
      fontFamily: { sans: ['ui-sans-serif', 'Figtree', 'sans-serif'] },
      borderRadius: { lg: '16px', xl: '24px', full: '9999px' },
      boxShadow: { sm: 'rgb(128, 128, 128) 0px 0px 5px 0px' },
      maxWidth: { container: '1280px' },
    },
  },
  plugins: [],
};
