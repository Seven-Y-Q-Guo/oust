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
  const $ = cheerio.load(htmlString);

  return $(typeMap[type].name).get().filter((item, i) => {
    if (typeof cb === 'function') {
      return cb($(item), i);
    }

    return true;
  }).map((item) => typeMap[type].children ? item.children[0].data : item.attribs[typeMap[type].attr]);
}

module.exports = oust;
