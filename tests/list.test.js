const { getSupport } = require('../fake/fakeCanIUse');

// case B
it("gets the names of supported web browsers for the features: \"flexbox\"", () => {});

// case C
it("gets the names of supported web browsers for the features: \"border-radius flexbox\" (expects a support intersection)", () => {});

// case E
it("gets the names of supported web browsers for the features: \"none\" (expects empty results)", () => {});

// case F
it("gets the names of supported web browsers for the features: \"none flexbox\" (expects same result as in case B)", () => {});



