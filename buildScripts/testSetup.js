// This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before out tests run.
require('babel-reqister')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};