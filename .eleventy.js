const htmlmin = require('html-minifier');

module.exports = function (config) {
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/screenshots');
  config.addPassthroughCopy('src/fonts-for-ui');

  config.addCollection('fonts', function (collection) {
    let fonts = collection
      .getFilteredByGlob('src/fonts/*.md')
      .sort((a, b) => (b.data.title < a.data.title ? 1 : -1));
    return fonts;
  });

  // is production build (netlify) :: minify html
  if (process.env.PROD === 'true') {
    // pulled from Eleventy docs
    // https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
    config.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }

      return content;
    });
  }

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
