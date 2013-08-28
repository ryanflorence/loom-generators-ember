var glob = require('glob');
var inflector = require('../../lib/inflector');
var fs = require('loom/lib/fs');
var assignable = ['component', 'controller', 'model', 'route', 'view', 'mixin'];

exports.template = 'build/index.js.hbs';

exports.savePath = function() {
  return 'app/index.js';
};

exports.present = function() {
  return {
    modules: modules(),
    helpers: helpers()
  };
};

exports.write = function(savePath, src) {
  fs.confirmWriteFileSync(savePath, src, 'force');
};

function modules() {
  return assignable.reduce(function(modules, dir) {
    return modules.concat(glob.sync('app/'+dir+'s/**/*.js').map(function(module) {
      // app/controllers/application -> ApplicationController
      var name = module.replace('app/'+dir+'s', '').replace(/\.js$/, '')+'/'+dir;
      return {
        path: module.replace(/^app/, '.').replace(/\.js$/, ''),
        name: inflector.objectify(name)
      };
    }));
  }, []);
}

function helpers() {
  return glob.sync('app/helpers/**/*.js').map(function(helper) {
    return { path: helper.replace(/^app/, '.').replace(/\.js$/, '') };
  });
}

