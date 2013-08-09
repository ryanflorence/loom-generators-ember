var generator = require('./default');
var punch = require('duck-punch');
var msg = require('loom/lib/message');

module.exports = punch(Object.create(generator), {
  present: function(old, name, options, env) {
    var locals = old(name, options, env);
    locals.type = types[options.type];
    if (!locals.type) {
      locals.type = promptControllerType();
    }
    return locals;
  }
});

function promptControllerType() {
  var userInput = msg.prompt('What kind of controller: object, array, or neither? [o|a|n]');
  return types[userInput];
}

var types = {
  'n': '',
  'neither': '',
  'o': 'Object',
  'object': 'Object',
  'a': 'Array',
  'array': 'Array'
};

