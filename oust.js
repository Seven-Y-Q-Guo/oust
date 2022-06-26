const cheerio = require('cheerio');

function oust(htmlString, type) {
  const $ = cheerio.load(htmlString);

  return $('link').get().map(item => item.attribs.href);
}

// const hrefs = oust(htmlString, 'stylesheets');

module.exports = oust;
