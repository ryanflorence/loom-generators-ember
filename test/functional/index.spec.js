var loom = require('loom');
var render = require('../helpers/render');
var stubIndex = require('../helpers/stub_index');

describe('index build', function() {
  it('renders the template correctly', function() {
    var stub = stubIndex();
    var locals = {
      modules: [
        { path: './controllers/application', name: 'ApplicationController' },
        { path: './controllers/foo/bar/baz-qux', name: 'FooBarBazQuxController' }
      ],
      helpers: [{ path: './helpers/capitalize' }]
    };
    var index = render('build/index.js.hbs', locals);
    loom('-sq index').out.should.equal(index);
    stub.restore();
  });

});


