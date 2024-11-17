module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/42-theme/**/*.html",
    "./src/**/*.{html,js}",
  ],
  fontFamily: {
    sans: ['"a-otf-ud-shin-go-pr6n"', '"futura-pt"', "sans-serif !important"],
  },
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("daisyui")],
};
