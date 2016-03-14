//Still need require format to load Babel as NodeJS 4 does not support import syntax
require("babel-register");
//require('systemjs').config({
//    transpiler: 'babel'
//});
require('./app');
