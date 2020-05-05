const browserNames = require('./shortNamesMap');

module.exports = getBrowsers => () => getBrowsers()
  .map(id => browserNames.get(id))
  .filter(s => typeof s === 'string')
  .join('\n');
