module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Raleway', "sans-serif"],
        heading1: ['Poppin', "sans-serif"],
      },
     },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
