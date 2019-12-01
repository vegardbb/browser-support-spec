// const { getSupport } = require('caniuse-api');

const convertMap = versionMap => Object.entries(versionMap).reduce(
  (aggregate, [key, value]) => {
    const { y } = value;
    if (!y) return aggregate;
    return Object.assign({}, aggregate, { [key]: `${y}` });
  },
  {},
);

/**
 * @module list
 * DI-enabled function which searches a browser support api for all versions of browser which definitely supports a set of input (case sensitive) web technologies.
 *
 */
module.exports = () => Object.create(null);
exports.listCanIUse = () => Object.create(null);
