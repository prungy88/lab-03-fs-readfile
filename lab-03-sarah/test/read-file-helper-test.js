'use strict';

const readFunctions = require('../lib/read-file-helper.js');
const assert = require('assert');

describe('testing read-file-helper', function() {
  //the done makes the it block asynchronous, so the it block doesn't run until the done is called
  it('hex codes should console.log in order', function(done) {
    readFunctions(function(hexArray) {
      assert.equal(hexArray.join(), ['46', '53', '54'].join());
      done();
    });
  });
});
