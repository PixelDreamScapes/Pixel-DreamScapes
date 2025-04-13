/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A5CF5',
        secondary: '#57B5E7',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        vt323: ['VT323', 'monospace'],
        press: ['"Press Start 2P"', 'cursive'],
      },
      borderRadius: {
        button: '8px',
      },
    },
  },
  plugins: [],
}