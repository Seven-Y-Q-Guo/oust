const fs = require('fs');
const oust = require('../oust');

test('should return an array of stylesheet link hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheet.html', 'utf-8');
  const expected = oust(htmlString, 'stylesheets');
  const links = oust(htmlString, 'stylesheets');

  expect(links).toEqual(expected);
});
