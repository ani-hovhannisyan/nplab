module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "docs"  // GitHub Pages serves from this folder
    }
  };
};
