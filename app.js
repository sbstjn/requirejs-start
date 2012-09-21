/**
 * Load and configure RequireJS
 * @see http://requirejs.org/docs/node.html
 */
var requirejs = require('requirejs');
requirejs.config({nodeRequire: require});

requirejs(['./libs/myObject'], function(myObject) {
  var obj = new myObject();
  
  obj.myFunc();
});