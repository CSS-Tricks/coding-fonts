module.exports = {
  permalink: process.env.ELEVENTY_ENV === 'production' ? false : '/code_samples/{{ page.fileSlug }}/'
}