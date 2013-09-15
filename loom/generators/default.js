var genericGenerator = require('loom/lib/generic_generator');
var inflector = require('../../lib/inflector');
var msg = require('loom/lib/message');

var generator = module.exports = Object.create(genericGenerator);

var app = generator.appPath = 'app';

generator.before = function(env) {
  if (!env.args.length) {
    msg.error("You must specify a resource name, ie 'generate "+env.name+" user'");
  } else {
    env.rawName = env.args[0];
    env.args[0] = inflector.dasherize(env.args[0]);
  }
};

generator.present = function(name) {
  var params = arguments[arguments.length - 2];
  var env = arguments[arguments.length - 1];
  if (appendable(env.name)) {
    name += '-'+env.name;
  }
  return {
    objectName: inflector.objectify(name),
    params: params
  };
};

generator.template = function(env) {
  var plural = inflector.pluralize(env.name);
  return app+'/'+plural+'/'+env.name+'.js.hbs';
};

function appendable(generatorName) {
  var types = ['component', 'controller', 'route', 'view'];
  return types.indexOf(generatorName) > -1;
}

