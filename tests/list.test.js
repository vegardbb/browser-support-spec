const { getSupport } = require('../fake/fakeCanIUse');
const list = require('../list');

// case B
xit("gets the ID's of supported web browsers for the features: \"flexbox\"", () => {
  /**
    * Expected output from list(getSupport)('flexbox'):
    * { and_chr: '75', and_ff: '67', and_qq: '1.2', and_uc: '12.12', android: '4.4', baidu: '7.12', chrome: '21', edge: 12'', firefox: '28', ie_mob: '11', ios_saf: '7.0', op_mini: 'all', op_mob: '12.1', opera: '12.1', safari: '6.1', samsung: '4' }
    */
  const supported = list(getSupport)('flexbox');
  const browserKeys = Object.keys(supported);
  expect(browserKeys).toHaveLength(16);
  expect(browserKeys).toEqual(expect.arrayContaining(['and_chr', 'and_ff', 'and_qq', 'and_uc', 'android', 'baidu', 'chrome', 'edge', 'firefox', 'ie_mob', 'ios_saf', 'op_mini', 'op_mob', 'opera', 'safari', 'samsung']));
  const browserVerisons = Object.values(supported);
  expect(browserVerisons).toEqual(expect.arrayContaining(['75', '67', '1.2', '12.12', '4.4', '7.12', '21', '12', '28', '11', '7.0', 'all', '12.1', '12.1', '6.1', '4']));
  expect(browserVerisons.length).toEqual(browserKeys.length);
});

// case C
xit("gets the ID's of supported web browsers for the features: \"border-radius flexbox\"", () => {
  /**
    * Expected output from list(getSupport)('border-radius flexbox'):
    * { and_chr: '75', and_ff: '67', and_qq: '1.2', and_uc: '12.12', android: '4.4', baidu: '7.12', chrome: '21', edge: '12', firefox: '28', ie_mob: '11', ios_saf: '7.0', op_mob: '12.1', opera: '12.1', safari: '6.1', samsung: '4' }
    */
  const supported = list(getSupport)('border-radius flexbox');
  const browserKeys = Object.keys(supported);
  expect(browserKeys).toHaveLength(15);
  expect(browserKeys).toEqual(expect.arrayContaining(['and_chr', 'and_ff', 'and_qq', 'and_uc', 'android', 'baidu', 'chrome', 'edge', 'firefox', 'ie_mob', 'ios_saf', 'op_mob', 'opera', 'safari', 'samsung']));
  const browserVerisons = Object.values(supported);
  expect(browserVerisons).toEqual(expect.arrayContaining(['75', '67', '1.2', '12.12', '4.4', '7.12', '21', '12', '28', '11', '7.0', '12.1', '12.1', '6.1', '4']));
  expect(browserVerisons.length).toEqual(browserKeys.length);
});

// case E
xit("gets the ID's of supported web browsers for the features: \"none\" (expects empty results)", () => {
  /**
    * Expected output from list(getSupport)('none'):
    * {}
    */
  const supported = list(getSupport)('none');
  const browserKeys = Object.keys(supported);
  expect(browserKeys).toHaveLength(0);
  expect(browserKeys).toEqual(expect.arrayContaining([]));
  const browserVerisons = Object.values(supported);
  expect(browserVerisons).toEqual(expect.arrayContaining([]));
  expect(browserVerisons.length).toEqual(browserKeys.length);
});

// case F
xit("gets the ID's of supported web browsers for the features: \"none flexbox\" (expects precisely the same result as in case B)", () => { });
