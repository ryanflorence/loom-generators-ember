var loom = require('loom');
var render = require('../helpers/render');
var msg = require('loom/lib/message');
var sinon = require('sinon');

describe('template', function() {

  it('renders the template correctly', function() {
    var locals = {objectName: 'User'};
    var expected = render('app/templates/template.hbs.hbs', locals);
    loom('-sq template user').out.should.equal(expected);
  });

  it('requires a - in a component name', function() {
    var mock = sinon.mock(msg);
    mock.expects('error').once();
    loom('-sq template components/foo');
    mock.verify();
    mock.restore();
  });

});


