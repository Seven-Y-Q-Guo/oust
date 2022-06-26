const oust = require('../oust');
const htmlString = `<style>body {padding:0}</style>
<link rel="stylesheet preload" href="assets/css/bootstrap.css" as="style" />
<style>h1 {font-size: 5rem}</style>
<link rel="stylesheet" href="styles/main.css">`;

test('get stylesheets', () => {
  expect(oust(htmlString, 'stylesheets')).toEqual(['assets/css/bootstrap.css', 'styles/main.css']);
});
