// caniuse.find('inline-flex') // yields ['flexbox']
// caniuse.find('radius') // yields ['border-radius']
exports.find = function fakeFind(query) {
  if (query === 'inline-flex' || query === 'flexbox') return ['flexbox'];
  if (query === 'radius' || query === 'border-radius') return ['border-radius'];
  return [];
}

exports.getSupport = function fakeGetSupport(feature) {
  if (feature === 'border-radius') {
    return {
      and_chr: { y: 67 },
      and_ff: { y: 60 },
      and_qq: { y: 1.2 },
      and_uc: { y: 11.8 },
      android: { y: 2.1, x: 2.1 },
      baidu: { y: 7.12 },
      chrome: { y: 4, x: 4 },
      edge: { y: 12 },
      firefox: { a: 2, x: 3.6, y: 3 },
      ie: { n: 8, y: 9 },
      ie_mob: { y: 10 },
      ios_saf: { y: 3.2, x: 3.2 },
      op_mini: {},
      op_mob: { n: 10, y: 11 },
      opera: { n: 10, y: 10.5 },
      safari: { y: 3.1, x: 4 },
      samsung: { y: 4 },
    };
  } else if (feature === 'flexbox') {
    return {
      and_chr: { y: 75 },
      and_ff: { y: 67 },
      and_qq: { y: 1.2 },
      and_uc: { y: 12.12 },  
      android: { a: 4.3, y: 4.4, x: 4.3 },
      baidu: { y: 7.12 },
      chrome: { y: 21, x: 28 },
      edge: { y: 12 },
      firefox: { a: 2, x: 2, y: 28 },
      ie: { n: 9, x: 10, a: 11 },
      ie_mob: { y: 11, a: 10, y: 10 },
      ios_saf: { a: 6.1, y: 7.0, x: 8 },
      op_mini: { y: "all" },
      op_mob: { n: 12, y: 12.1 },
      opera: { n: 11.5, y: 12.1 },
      safari: { y: 6.1, x: 7.1, a: 6 },
      samsung: { y: 4 },
    };
  }
  return Object.create(null);
}

/*
Expected combination of features flexbox and border-radius, greater than:
return {
  and_chr: 75,
  and_ff: 67,
  and_qq: 1.2,
  and_uc: 12.12,  
  android: 4.4,
  baidu: 7.12,
  chrome: 21,
  edge: 12,
  firefox: 28,
  ie: {},
  ie_mob: 11,
  ios_saf: 7.0,
  op_mini: {},
  op_mob: 12.1,
  opera: 12.1,
  safari: 6.1,
  samsung: 4,
};
*/