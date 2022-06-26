const cheerio = require('cheerio');

const htmlString = `<style>body {padding:0}</style>
<link rel="stylesheet preload" href="assets/css/bootstrap.css" as="style" />
<style>h1 {font-size: 5rem}</style>
<link rel="stylesheet" href="styles/main.css">`;
const $ = cheerio.load(htmlString);

console.log($('link').get().map(item => item.attribs.href));
