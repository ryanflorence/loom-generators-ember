var loom = require('loom');
var render = require('../helpers/render');
var msg = require('loom/lib/message');
var sinon = require('sinon');

describe('controller', function() {

  it('renders regular controllers', function() {
    var locals = {objectName: 'ApplicationController'};
    var expected = render('app/controllers/controller_controller.js.hbs', locals);
    loom('-sq controller application type:n').out.should.equal(expected);
  });

  it('renders object controllers', function() {
    var locals = {objectName: 'ApplicationController', type: 'Object'};
    var expected = render('app/controllers/controller_controller.js.hbs', locals);
    loom('-sq controller application type:object').out.should.equal(expected);
  });

  it('renders array controllers', function() {
    var locals = {objectName: 'ApplicationController', type: 'Array'};
    var expected = render('app/controllers/controller_controller.js.hbs', locals);
    loom('-sq controller application type:array').out.should.equal(expected);
  });

  it('prompts for controller type if not specified', function() {
    var mock = sinon.mock(msg);
    mock.expects('prompt').once();
    loom('-sq controller application');
    mock.verify();
    mock.restore();
  });

});


