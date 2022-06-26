const cheerio = require('cheerio');
const typeMap = {
  'stylesheets': 'link'
};

function oust(htmlString, type, cb) {
  const $ = cheerio.load(htmlString);

  return $(typeMap[type]).get().filter((item, i) => {
    if (typeof cb === 'function') {
      return cb($(item), i);
    }

    return true;
  }).map((item) => item.attribs.href);
}

module.exports = oust;
