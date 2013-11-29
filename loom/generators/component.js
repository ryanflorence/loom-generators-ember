var componentize = require('../../lib/componentize_template');
var validateComponent = require('../../lib/validate_component');
var parent = require('./default');
var path = require('path');
var generator = module.exports = Object.create(parent);
var app = generator.appPath;

generator.before = function(next, env) {
  parent.before(env);
  validateComponent(env.rawName);
  next();
};

generator.templates = [
  app+'/components/component.js.hbs',
  app+'/templates/components/component.hbs.hbs'
];

generator.savePath = function(next, env, template) {
  var savePath = parent.savePath(template, env);
  next(isTemplate(savePath) ? componentize(savePath) : savePath);
};

function isTemplate(savePath) {
  return path.extname(savePath) === '.hbs';
}

