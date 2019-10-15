const { find } = require('../fake/fakeCanIUse');
const search = require('../search');

// case A
it("searches for the keyword 'radius', the result containing 'border-radius'", () => {
  const searchResult = search(find)('radius');
  expect(searchResult).toEqual(expect.arrayContaining(['border-radius']));
});

// case D
it("searches for the keyword 'none', the result shall be empty", () => {
  const searchResult = search(find)('none');
  expect(searchResult).not.toEqual(expect.arrayContaining(['border-radius']));
  expect(searchResult).toHaveLength(0);
});
