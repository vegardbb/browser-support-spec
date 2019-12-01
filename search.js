const { find } = require('caniuse-api');

const getSearch = findAPI => query => findAPI(query);
module.exports = getSearch;
exports.searchCanIUse = getSearch(find);
