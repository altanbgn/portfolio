// prettier.config.js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
}