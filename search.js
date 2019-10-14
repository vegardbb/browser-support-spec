const { find } = require('caniuse-api');
// We may import other feature search APIs here...

const search = findAPI => query => findAPI(query);
module.exports = search;
exports.searchCanIUseAPI = search(find);
// ...And export other query functions using them here...
