const {queryString} = require('./index');
const assert = require('assert');

describe('Query String Object', () => {
  describe('#queryString()', () => {
    it('should save format a given js object to a query string', (done) => {
      const obj = {firstName: 'stephen', lastName: 'kenigbolo'};
      assert.equal(queryString(obj), '?firstName=stephen&lastName=kenigbolo');
      done();
    });
    it('should return null for an empty object', (done) => {
      assert.equal(queryString({}), null);
      done();
    });
  });
});
