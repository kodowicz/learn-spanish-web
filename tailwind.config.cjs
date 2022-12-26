/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'purple': 'rgb(98, 0, 238)'
      },
      backgroundImage: {
        'confetti': 'url(\'/confetti.svg\')'
      }
    },
  },
  plugins: [],
};
