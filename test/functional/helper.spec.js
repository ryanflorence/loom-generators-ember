var loom = require('loom');
var render = require('../helpers/render');

describe('helper', function() {

  it('renders the template correctly', function() {
    var locals = { helperName: 'capitalize' };
    var expected = render('app/helpers/helper.js.hbs', locals);
    loom('-sq helper capitalize').out.should.equal(expected);
  });

});

