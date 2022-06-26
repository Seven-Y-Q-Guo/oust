const oust = require('./oust');

const htmlString = `<style>body {padding:0}</style>

<style>h1 {font-size: 5rem}</style>`;

console.log(oust(htmlString, 'styles'));
