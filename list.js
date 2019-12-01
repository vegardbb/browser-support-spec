const { getSupport } = require('caniuse-api');

const convertMap = versionMap => Object.entries(versionMap).reduce(
  (aggregate, [key, value]) => {
    const { y } = value;
    if (!y) return aggregate;
    return Object.assign({}, aggregate, { [key]: `${y}` });
  },
  {},
);

const getList = supportAPI => query => supportAPI(query);

/**
 * @module list
 * DI-enabled function which searches a browser support api for all versions of browser which definitely supports a set of input (case sensitive) web technologies.
 *
 */
module.exports = getList;
exports.listCanIUse = getList(getSupport);
