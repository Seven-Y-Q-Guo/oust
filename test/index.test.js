const fs = require('fs');
const oust = require('../oust');

test('should return an array of stylesheet link hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheets.html', 'utf-8');
  const expected = ['assets/css/bootstrap.css', 'styles/main.css'];
  const links = oust(htmlString, 'stylesheets');

  expect(links).toEqual(expected);
});

test('should return an array of stylesheet link hrefs via condition', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheets-media.html', 'utf-8');
  const expected = ['styles/print.css'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('media') === 'print';
  });

  expect(links).toEqual(expected);
});

test('should return an array of HTML imports', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheets-import.html', 'utf-8');
  const expected = ['../polymer/polymer.html', '../core-ajax/core-ajax.html', '../core-input/core-input.html'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('rel') === 'import';
  });

  expect(links).toEqual(expected);
});

test('should return an array of stylesheet preload hrefs', () => {
  const htmlString = fs.readFileSync(__dirname + '/stylesheets-preload.html', 'utf-8');
  const expected = ['styles/preload.css'];
  const links = oust(htmlString, 'stylesheets', ($el, i) => {
    return $el.attr('rel') === 'preload';
  });

  expect(links).toEqual(expected);
});

test('should return an array of script srcs', () => {
  const htmlString = fs.readFileSync(__dirname + '/scripts.html', 'utf-8');
  const expected = ['scripts/main.js', 'scripts/out.js'];
  const links = oust(htmlString, 'scripts');

  expect(links).toEqual(expected);
});

test('should return an array of link URLs', () => {
  const htmlString = fs.readFileSync(__dirname + '/links.html', 'utf-8');
  const expected = ['index.html', 'about.html', 'contact.html', '#'];
  const links = oust(htmlString, 'links');

  expect(links).toEqual(expected);
});

test('should return an array of image sources', () => {
  const htmlString = fs.readFileSync(__dirname + '/images.html', 'utf-8');
  const expected = [
    'http://placekitten.com/200/300',
    'http://placekitten.com/300/400',
    'http://placekitten.com/500/600'
  ];
  const links = oust(htmlString, 'images');

  expect(links).toEqual(expected);
});

test('should return inline styles from styles tag', () => {
  const htmlString = fs.readFileSync(__dirname + '/styles.html', 'utf-8');
  const expected = ['body {padding:0}', 'h1 {font-size: 5rem}'];
  const links = oust(htmlString, 'styles');

  expect(links).toEqual(expected);
});

test('should return hrefs and inline styles in correct order', () => {
  const htmlString = fs.readFileSync(__dirname + '/mixed.html', 'utf-8');
  const expected = [
    'body {padding:0}',
    'h1 {font-size: 5rem}',
    'styles/main.css'
  ];
  const links = oust(htmlString, ['styles', 'stylesheets']);

  expect(links).toEqual(expected);
});

test('should fail if no htmlString is specified', () => {
  expect(() => oust()).toThrow('Error: `htmlString` required');
});

test('should fail if no type is specified', () => {
  expect(() => oust('<div>seven</div>')).toThrow('Error: `type` required');
});
