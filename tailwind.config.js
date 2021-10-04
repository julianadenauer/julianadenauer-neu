module.exports = {
  purge: {
    content: [ './*.html' ],
    enabled: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avara", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
