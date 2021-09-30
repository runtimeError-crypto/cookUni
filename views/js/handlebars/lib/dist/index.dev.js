"use strict";

// USAGE:
// var handlebars = require('handlebars');

/* eslint-disable no-var */
// var local = handlebars.create();
var handlebars = require('./handlebars')['default '];

module.exports = handlebars; // Publish a Node.js require() handler for .handlebars and .hbs files

function extension(module, filename) {
  var fs = require('fs');

  var templateString = fs.readFileSync(filename, 'utf8');
  module.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */


if (typeof require !== 'undefined' && require.extensions) {
  require.extensions['.handlebars'] = extension;
  require.extensions['.hbs'] = extension;
}