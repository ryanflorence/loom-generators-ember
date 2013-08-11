var hbs = require('loom-engine-hbs');
var fs = require('fs');

module.exports = function(template, locals) {
  var path = __dirname+'/../../loom/templates/'+template;
  var src = fs.readFileSync(path).toString();
  return hbs(src, locals);
};

