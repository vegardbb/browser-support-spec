const convertMap = versionMap => Object.entries(versionMap).reduce((aggregate, [key, value]) => (value != null && typeof value === 'object' && Number.isFinite(value.y)) ? Object.assign({}, aggregate, { [key]: value.y }) : aggregate, {});

/**
 * Converts a list of version maps to one aggregate map object, where each browser key is associated with one specific version
 */
function browserVersions(accumulatedSupportMap, featureMap, i, featureArray) {
  Object.entries(featureMap).forEach(([key, value]) => {
    if (accumulatedSupportMap[key]) {
      accumulatedSupportMap[key].push(value);
    } else {
      accumulatedSupportMap[key] = [value];
    }
  });
  // On the last iteration
  if (i === featureArray.length - 1) {
    // Filter out all browser keys in accumulatedSupportMap who do not have featureArray.length versions in their value array
    return Object.entries(accumulatedSupportMap).reduce((aggregate, [browser, list]) => ((list.length === featureArray.length) ? Object.assign({}, aggregate, { [browser]: list.sort((a, b) => a - b).pop() }) : aggregate), {});
  }
  return accumulatedSupportMap;
}

/**
 * @module list
 * A function which searches a browser support api for all versions of browser which definitely supports
 * a set of input (case sensitive) web technologies.
 */
module.exports = supportAPI => query => query.split(' ')
  .map(feature => supportAPI(feature))
  .filter(versionMap => Object.keys(versionMap).length > 0)
  .map(convertMap)
  .reduce(browserVersions, Object.create(null));
