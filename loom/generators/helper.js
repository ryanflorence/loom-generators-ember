var inflector = require('../../lib/inflector');
var generator = require('./default');

module.exports = generator;

generator.present = function(name) {
  return {
    helperName: inflector.camelize(name)
  };
};

