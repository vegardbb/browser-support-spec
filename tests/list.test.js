const test = require('ava');
const { getSupport } = require('../fake/fakeCanIUse');
const list = require('../list');

const requiredKeys = ['and_chr', 'and_ff', 'and_qq', 'and_uc', 'android', 'baidu', 'chrome', 'edge', 'firefox', 'ie_mob', 'ios_saf', 'op_mob', 'opera', 'safari', 'samsung'];

// case B
test("gets the IDs and versions of supported web browsers for the features denoted in the string 'flexbox'", (t) => {
  /**
    * Expected output from list(getSupport)('flexbox'):
    * { and_chr: 75, and_ff: 67, and_qq: 1.2, and_uc: 12.12, android: 4.4, baidu: 7.12, chrome: 21, edge: 12, firefox: 28, ie_mob: 11, ios_saf: 7.0, op_mob: 12.1, opera: 12.1, safari: 6.1, samsung: 4 }
    */
  const supported = list(getSupport)(['flexbox']);
  const browserKeys = Object.keys(supported);
  t.is(browserKeys.length, 15);
  t.true(requiredKeys.every(k => browserKeys.includes(k)))
  const browserVersions = Object.values(supported);
  t.true([75, 67, 1.2, 12.12, 4.4, 7.12, 21, 12, 28, 11, 7.0, 12.1, 12.1, 6.1, 4].every(number => browserVersions.includes(number)))
  t.is(browserVersions.length, browserKeys.length);
});

// case C
test("gets the IDs and versions of supported web browsers for the features denoted in the string 'border-radius flexbox'", (t) => {
  /**
    * Expected output from list(getSupport)('border-radius flexbox'):
    * { and_chr: 75, and_ff: 67, and_qq: 1.2, and_uc: 12.12, android: 4.4, baidu: 7.12, chrome: 21, edge: 12, firefox: 28, ie_mob: 11, ios_saf: 7, op_mob: 12.1, opera: 12.1, safari: 6.1, samsung: 4 }
    */
  const supported = list(getSupport)('border-radius flexbox'.split(' '));
  const browserKeys = Object.keys(supported);
  t.is(browserKeys.length, 15);
  t.true(requiredKeys.every(k => browserKeys.includes(k)))
  const browserVersions = Object.values(supported);
  t.true([75, 67, 1.2, 12.12, 4.4, 7.12, 21, 12, 28, 11, 7.0, 12.1, 12.1, 6.1, 4].every(number => browserVersions.includes(number)))
  t.is(browserVersions.length, browserKeys.length);
});

// case E
test("gets the IDs and versions of supported web browsers for the features denoted in the string 'none'", (t) => {
  /**
    * Expected output from list(getSupport)('none'):
    * {}
    */
  const supported = list(getSupport)(['none']);
  const browserKeys = Object.keys(supported);
  t.is(browserKeys.length, 0);
  const browserVersions = Object.values(supported);
  t.is(JSON.stringify(browserKeys), JSON.stringify([]))
  t.is(JSON.stringify(browserVersions), JSON.stringify([]))
  t.is(browserVersions.length, browserKeys.length);
});

// case F
test("gets the IDs and versions of supported web browsers for the features denoted in the string 'none flexbox'", (t) => {
  /**
    * Expected output from list(getSupport)('none flexbox'):
    * Same output as in B
    */
  const supported = list(getSupport)('none flexbox'.split(' '));
  const browserKeys = Object.keys(supported);
  t.is(browserKeys.length, 15);
  t.true(requiredKeys.every(k => browserKeys.includes(k)))
  const browserVersions = Object.values(supported);
  t.true([75, 67, 1.2, 12.12, 4.4, 7.12, 21, 12, 28, 11, 7, 12.1, 12.1, 6.1, 4].every(number => browserVersions.includes(number)))
  t.is(browserVersions.length, browserKeys.length);
});
