const fs = require('fs');
const oust = require('../oust');

test('should return an array of stylesheet link hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheet.html', 'utf-8');
  const expected = ['assets/css/bootstrap.css', 'styles/main.css'];
  const links = oust(htmlString, 'stylesheets');

  expect(links).toEqual(expected);
});

test('should return an array of stylesheet link hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/media.html', 'utf-8');
  const expected = ['styles/print.css'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('media') === 'print';
  });

  expect(links).toEqual(expected);
});
