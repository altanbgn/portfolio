/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      }
    },
    fontFamily: {
      'cutive': ['"Cutive Mono"', 'monospace'],
      'dancing': ['"Dancing Script"', 'cursive'],
      'comic': ['"Comic Neue"', 'cursive']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
