const cheerio = require('cheerio');
const typeMap = {
  'stylesheets': 'link'
};

function oust(htmlString, type) {
  const $ = cheerio.load(htmlString);

  return $(typeMap[type]).get().map(item => item.attribs.href);
}

module.exports = oust;
