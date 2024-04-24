export default {
  plugins: {
    "postcss-nesting": true,
    "postcss-purgecss": {
      content: ["src/index.html"],
      css: ["src/style/style.css"]
    },
    autoprefixer: true
  }
};
