var generator = require('./default');
var punch = require('duck-punch');
var componentize = require('../../lib/componentize_template');
var validateComponent = require('../../lib/validate_component');

module.exports = punch(Object.create(generator), {

  template: 'app/templates/template.hbs.hbs',

  savePath: function(old, template, env) {
    var savePath = old(template, env);
    if (isComponent(savePath)) {
      validateComponent(env.args[0]);
      savePath = componentize(savePath);
    }
    return savePath;
  }

});

function isComponent(savePath) {
  return savePath.match(/^app\/templates\/components\//);
}

