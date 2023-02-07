/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'cutive': ['"Cutive Mono"', 'monospace'],
      'dancing': ['"Dancing Script"', 'cursive'],
      'comic': ['"Comic Neue"', 'cursive']
    }
  },
  plugins: [],
}
