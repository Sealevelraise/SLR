/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  //
  theme: {
    extend: {
      colors: {
        'slr-blue': '#0051A0',
        'slr-page-bg': '#FDF5E0',
      },
      fontFamily: {
        robotoSlab: ['RobotoSlab'],
        roboto: ['Roboto'],
      },
    },
    container: {},
  },
  //
  variants: {
    objectFit: ['responsive', 'hover', 'focus'],
  },
  //
  plugins: [],
}
