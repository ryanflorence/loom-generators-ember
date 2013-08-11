var loom = require('loom');
var render = require('../helpers/render');
var msg = require('loom/lib/message');
var sinon = require('sinon');

describe('component', function() {

  it('renders the template correctly', function() {
    var locals = {objectName: 'XFooComponent'};
    var component = render('app/components/component_component.js.hbs', locals);
    var template = render('app/templates/components/component.hbs.hbs', locals);
    loom('-sq component x-foo').out.should.equal(component + template);
  });

  it('requires a - in the component name', function() {
    var mock = sinon.mock(msg);
    mock.expects('error').once();
    loom('-sq component foo');
    mock.verify();
    mock.restore();
  });

});


