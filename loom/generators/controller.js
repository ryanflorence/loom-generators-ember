var parent = require('./default');
var msg = require('loom/lib/message');
var generator = module.exports = Object.create(parent);

generator.present = function(next, env, name, params, env, next) {
  parent.present(function(locals) {
    locals.type = types[params.type];
    if (locals.type == null) {
      promptControllerType(function(type) {
        locals.type = type;
        next(locals);
      });
    } else {
      next(locals);
    }
  }, env);
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

