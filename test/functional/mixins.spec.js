var loom = require('loom');
var render = require('../helpers/render');

describe('mixin', function() {

  it('renders the template correctly', function() {
    var locals = { objectName: 'TacoCartable' };
    var expected = render('app/mixins/mixin.js.hbs', locals);
    loom('-sq mixin taco_cartable').out.should.equal(expected);
  });

});

