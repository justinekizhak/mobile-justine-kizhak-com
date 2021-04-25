module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: require("tailwindcss/colors"),
      fontFamily: {
        jost: "'Jost'",
        major: "'Major Mono Display'",
        // 'ocean-rush': "'OceanRush'",
        // ultra: 'Ultra',
        cormorant: "Cormorant Garamond",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
