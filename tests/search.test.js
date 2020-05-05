const test = require('ava');
const { find } = require('../fake/fakeCanIUse');
const search = require('../search');

// case A
test("searches for features containing the keyword 'radius'", (t) => {
  // expects this result: ['border-radius']
  const searchResult = search(find)('radius');
  t.is(JSON.stringify(searchResult), JSON.stringify(['border-radius']));
  t.is(searchResult.length, 1);
});

// case D
test("searches for features containing the keyword 'none'", (t) => {
  // The result shall be empty
  const searchResult = search(find)('none');
  t.is(JSON.stringify(searchResult), JSON.stringify([]));
  t.is(searchResult.length, 0);
});
