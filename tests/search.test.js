const { find } = require('../fake/fakeCanIUse');
const search = require('../search');

// case A
it("searches for features containing the keyword 'radius'", () => {
  // expects this result: ['border-radius']
  const searchResult = search(find)('radius');
  expect(searchResult).toEqual(expect.arrayContaining(['border-radius']));
});

// case D
it("searches for features containing the keyword 'none'", () => {
  // The result shall be empty
  const searchResult = search(find)('none');
  expect(searchResult).not.toEqual(expect.arrayContaining(['border-radius']));
  expect(searchResult).toHaveLength(0);
});
