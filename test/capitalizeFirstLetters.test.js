const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('works with a sentence', () => {
    assert.strictEqual(
      capitalizeFirstLetters('hello monsieur le correcteur'),
      'Hello Monsieur Le Correcteur'
    );
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
