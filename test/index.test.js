const fs = require('fs');
const oust = require('../oust');

test('should return an array of stylesheet link hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheet.html', 'utf-8');
  const expected = ['assets/css/bootstrap.css', 'styles/main.css'];
  const links = oust(htmlString, 'stylesheets');

  expect(links).toEqual(expected);
});

test('should return an array of stylesheet link hrefs via condition', () => {
  const htmlString = fs.readFileSync(__dirname + '/media.html', 'utf-8');
  const expected = ['styles/print.css'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('media') === 'print';
  });

  expect(links).toEqual(expected);
});

test('should return an array of script srcs', () => {
  const htmlString = fs.readFileSync(__dirname + '/scripts.html', 'utf-8');
  const expected = ['scripts/main.js', 'scripts/out.js'];
  const links = oust(htmlString, 'scripts');

  expect(links).toEqual(expected);
});

test('should return an array of HTML imports', () => {
  const htmlString = fs.readFileSync(__dirname + '/imports.html', 'utf-8');
  const expected = ['../polymer/polymer.html', '../core-ajax/core-ajax.html', '../core-input/core-input.html'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('rel') === 'import';
  });

  expect(links).toEqual(expected);
});

test('should return an array of stylesheet preload hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/preload.html', 'utf-8');
  const expected = ['styles/preload.css'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('rel') === 'preload';
  });

  expect(links).toEqual(expected);
});

test('should return an array of stylesheet preload hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/preload.html', 'utf-8');
  const expected = ['index.html', 'about.html', 'contact.html', '#'];
  const links = oust(htmlString, 'links');

  expect(links).toEqual(expected);
});
