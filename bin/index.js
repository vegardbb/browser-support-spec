#!/usr/bin/env node
const { find, getBrowserScope, getSupport } = require('caniuse-api');

const list = require('../list');
const search = require('../search');
const getHelpText = require('./getHelpText');
const lines = require('./helpText');
const scope = require('./getBrowserScope');
const { version } = require('../package.json');

const printSearchResult = q => [].concat(search(find)(q)).reduce((text, name) => `${text}${name}${'\n'}`, '').trimEnd();

// Example: ['search', 'fetch']
const cliArguments = process.argv.slice(2);

// action := scope, search, list, print, version, help
const action = cliArguments[0];

let verbArgs = null;
if (action === 'search') {
  verbArgs = cliArguments[1];
} else if (action === 'list' || action === 'print') {
  verbArgs = cliArguments.slice(1);
}

if (action === 'scope') {
  console.log(scope(getBrowserScope)());
} else if (action === 'version') {
  console.log(`v${version}`);
} else if (action === 'help') {
  console.log(getHelpText(lines, process.stdout.columns));
} else if (action === 'search') {
  console.log(printSearchResult(verbArgs));
} else if (action === 'list') {
  console.log('list', verbArgs);
}
