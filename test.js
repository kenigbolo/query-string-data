const {queryString} = require('./index');
const assert = require('assert');

const obj = {firstName: 'stephen', lastName: 'kenigbolo'};

assert.equal(queryString(obj), '?firstName=stephen&lastName=kenigbolo');

assert.equal(queryString({}), null);


