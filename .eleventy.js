module.exports = function (config) {
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/screenshots");

  config.addCollection("fonts", function (collection) {
    let fonts = collection.getFilteredByGlob("src/fonts/*.md"); 
    return fonts;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
