/* global require, module */


var pickFiles = require('broccoli-static-compiler');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var randomJSFile = pickFiles('bower_components/imagesloaded', {
  srcDir: '/',
  files: ['imagesloaded.pkgd.js'],
  destDir: '/assets'
});

var app = new EmberApp();

module.exports = app.toTree(randomJSFile);
