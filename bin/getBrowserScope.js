const { getBrowserScope } = require('caniuse-api');
const browserNames = require('./shortNamesMap');

module.exports = () => getBrowserScope()
  .map(id => browserNames.get(id))
  .filter(s => typeof s === 'string')
  .join('\n');
