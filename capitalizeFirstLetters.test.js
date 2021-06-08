const assert = require('assert');
const capitalizeFirstLetters = require('./capitalizeFirstLetters');

// -- une chaîne avec plusieurs mots --
assert.strictEqual(
  capitalizeFirstLetters('hello monsieur le correcteur'),
  'Hello Monsieur Le Correcteur'
);

// -- une chaîne avec un seul mot  --
assert.strictEqual(capitalizeFirstLetters('hey'), 'Hey');

// -- (voire une seule lettre) --
assert.strictEqual(capitalizeFirstLetters('o'), 'O');

// -- une chaîne vide --
assert.strictEqual(capitalizeFirstLetters(''), '');
