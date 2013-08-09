var generator = require('./default');
var punch = require('duck-punch');

module.exports = punch(Object.create(generator), {
  present: function(old, name) {
    // skip all the stuff inbetween
    var fields = arguments[arguments.length - 2];
    var locals = old(name);
    locals.fields = parseFields(fields);
    return locals;
  }
});

function parseFields(map) {
  var fields = [];
  for (var key in map) {
    fields.push({name: key, type: map[key]});
  }
  return fields;
}

