![oust](https://github.com/Seven-Y-Q-Guo/oust/actions/workflows/tests.yml/badge.svg)

# [build-your-own] oust
Inspired from https://github.com/addyosmani/oust

## API
#### Options

Attribute       | Required   | Description
---             | ---        | ---
`htmlString`    | True       | a valid HTML string to parse for references
`type`          | True       | one of `stylesheets`, `scripts`, `styles`, `links`, `images`
`cb`            | False      | Filter via callback

## Usage
First include:

```js
const oust = require('oust');
```

#### Extract stylesheets references `<link rel="stylesheet">`
```javascript
console.log(oust('<link rel="stylesheet" href="styles/main.css">', 'stylesheets')); // output: ["styles/main.css"]
```

#### Extract stylesheets references with media print `<link rel="stylesheet" media="print">`
```javascript
console.log(oust('<link rel="import" href="../polymer/polymer.html">', 'stylesheets', ($el, i) => {
  return $el.attr('media') === 'print';
})); // output: ["../polymer/polymer.html"]
```

#### Extract script references `<script src>`
```javascript
console.log(oust('<script src="scripts/main.js"></script>', 'scripts')); // output: ["scripts/main.js"]
```

#### Extract inline styles `<style>...</style>`
```javascript
console.log(oust('<style>body {padding:0}</style><style>h1 {font-size: 5rem}</style>', 'styles')); // output: ["body {padding:0}", "h1 {font-size: 5rem}"]
```

#### Extract URL references `<a href>`
```javascript
console.log(oust('<a href="contact.html">Contact</a>', 'links')); // output: ["contact.html"]
```

#### Extract image source references `<img src>`
```javascript
console.log(oust('<img src="http://placekitten.com/200/300">', 'images')); // output: ["http://placekitten.com/200/300"]
```
