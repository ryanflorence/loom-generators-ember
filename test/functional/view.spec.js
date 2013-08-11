var loom = require('loom');
var render = require('../helpers/render');

describe('view', function() {

  it('renders the template correctly', function() {
    var locals = { objectName: 'TacoCartView' };
    var expected = render('app/views/view_view.js.hbs', locals);
    loom('-sq view taco_cart').out.should.equal(expected);
  });

});



