module.exports = {
  content: [
    "./*.{html,js}",
    "./about.html",
    "./src/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: { },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
