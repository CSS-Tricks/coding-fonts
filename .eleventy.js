module.exports = function (config) {
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('src/screenshots');
  config.addPassthroughCopy('src/fonts-for-ui');

  config.addCollection('fonts', function (collection) {
    let fonts = collection
        .getFilteredByGlob('src/fonts/*.md')
        .sort((a, b) => b.data.title < a.data.title ? 1 : -1);
    return fonts;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      data: '_data'
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
