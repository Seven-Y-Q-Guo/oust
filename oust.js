const cheerio = require('cheerio');
const typeMap = {
  'stylesheets': {
    name: 'link',
    attr: 'href'
  },
  'scripts': {
    name: 'script',
    attr: 'src'
  }
};

function oust(htmlString, type, cb) {
  const $ = cheerio.load(htmlString);

  return $(typeMap[type].name).get().filter((item, i) => {
    if (typeof cb === 'function') {
      return cb($(item), i);
    }

    return true;
  }).map((item) => item.attribs[typeMap[type].attr]);
}

module.exports = oust;
