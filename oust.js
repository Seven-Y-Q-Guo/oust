const cheerio = require('cheerio');
const typeMap = {
  'stylesheets': {
    name: 'link',
    attr: 'href'
  },
  'scripts': {
    name: 'script',
    attr: 'src'
  },
  'links': {
    name: 'a',
    attr: 'href'
  },
  'images': {
    name: 'img',
    attr: 'src'
  },
  'styles': {
    name: 'style',
    children: true
  }
};

function oust(htmlString, type, cb) {
  if (!htmlString) {
    throw new Error('Error: `htmlString` required');
  }

  if (!type) {
    throw new Error('Error: `type` required');
  }

  const $ = cheerio.load(htmlString);
  const arr = typeof type === 'string' ? [type] : type;

  return arr.reduce((previousValue, currentValue) => (
    previousValue.concat($(typeMap[currentValue].name).get().filter((item, i) => {
      if (typeof cb === 'function') {
        return cb($(item), i);
      }

      return true;
    }).map((item) => typeMap[currentValue].children ? item.children[0].data : item.attribs[typeMap[currentValue].attr]))
  ), []);
}

module.exports = oust;
