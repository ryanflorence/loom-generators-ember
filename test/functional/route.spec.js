var loom = require('loom');
var render = require('../helpers/render');

describe('route', function() {

  it('renders the template correctly', function() {
    var locals = { objectName: 'TacoCartRoute' };
    var expected = render('app/routes/route_route.js.hbs', locals);
    loom('-sq route taco_cart').out.should.equal(expected);
  });

});


