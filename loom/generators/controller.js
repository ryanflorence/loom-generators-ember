var parent = require('./default');
var msg = require('loom/lib/message');
var generator = module.exports = Object.create(parent);

generator.present = function(name, params, env, next) {
  var locals = parent.present(name, params, env);
  locals.type = types[params.type];
  if (locals.type == null) {
    promptControllerType(function(type) {
      locals.type = type;
      next(locals);
    });
  } else {
    next(locals);
  }
};

function promptControllerType(next) {
  var q = 'What kind of controller: object, array, or neither? [o|a|n]';
  msg.prompt(q, function(input) {
    next(types[userInput]);
  });
}

var types = {
  'n': '',
  'neither': '',
  'o': 'Object',
  'object': 'Object',
  'a': 'Array',
  'array': 'Array'
};

