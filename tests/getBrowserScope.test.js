const { getBrowserScope } = require('../fake/fakeCanIUse');
const scope = require('../bin/getBrowserScope');

const solution = `Chrome for Android
Firefox for Android
QQ for Android
UC Browser for Android
Native Web Browser for Android
Baidu
Google Chrome
Microsoft Edge
Mozilla Firefox
Internet Explorer
Safari for iOS
Opera for mobile devices
Opera
Safari
Samsung web browser`;

// case H
it("gets the browser scope and converts it to a newline-separated string", () => {
  const result = scope(getBrowserScope)();
  expect(result).toEqual(solution);
});
