module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/42-theme/**/*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("daisyui")],
};
