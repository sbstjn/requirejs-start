if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function(require) {
  var obj = function() {
    this.lipsum = true;
  };

  obj.prototype.myFunc = function() {
    console.log('myFunc');
  };

  return obj;
});