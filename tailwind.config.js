module.exports = {
  content: [
    "./*.{html,js}",
    "./about.html",
    "../*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: { },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
