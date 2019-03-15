const chai = require('chai')
const assert = chai.assert;
const stringNormalizer = require('../index');

describe('normalizeString', function () {
  it('should trim strings', function () {
    assert.equal(stringNormalizer.normalizeString(' Hello  '), 'hello')
  });
  it('should lowercase the string', function () {
    assert.equal(stringNormalizer.normalizeString('Hello'), 'hello')
  });
  it('should replace spaces with dashes', function () {
    assert.equal(stringNormalizer.normalizeString('Hello there'), 'hello-there')
    assert.equal(stringNormalizer.normalizeString('Hello  there'), 'hello-there')
  });
  it('should make sure there are no non-alphanumeric charactes', function () {
    assert.equal(stringNormalizer.normalizeString('Hello*there'), 'hellothere')
  });
  it('should make sure there are no double dashes', function () {
    assert.equal(stringNormalizer.normalizeString('Hello--there'), 'hello-there')
  });
  it('should keep single dashes', function () {
    assert.equal(stringNormalizer.normalizeString('Hello-there'), 'hello-there')
  });
  it('should convert underscores to dashes', function () {
    assert.equal(stringNormalizer.normalizeString('Hello_there'), 'hello-there')
  });
});
