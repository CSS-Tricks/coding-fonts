module.exports = {
  imageLocation:
    process.env.PROD === 'true' ? 'https://coding-fonts.css-tricks.com' : '',
  urlPrefixLarge:
    process.env.PROD === 'true'
      ? 'https://res.cloudinary.com/css-tricks/image/fetch/w_1600,q_auto,f_auto/'
      : '',
  urlPrefixMedium:
    process.env.PROD === 'true'
      ? 'https://res.cloudinary.com/css-tricks/image/fetch/w_1200,q_auto,f_auto/'
      : '',
  urlPrefixSmall:
    process.env.PROD === 'true'
      ? 'https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/'
      : ''
};
