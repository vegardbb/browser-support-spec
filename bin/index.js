#!/usr/bin/env node
const path = require('path');
const { writeFileSync } = require('fs');
const { find, getBrowserScope, getSupport } = require('caniuse-api');

const browserNames = require('./shortNamesMap');
const list = require('../list');
const search = require('../search');
const getHelpText = require('./getHelpText');
const lines = require('./helpText');
const scope = require('./getBrowserScope');
const { version } = require('../package.json');

const printSearchResult = q => [].concat(search(find)(q)).reduce((text, name) => `${text}${name}${'\n'}`, '').trimEnd();
const printListResult = q => Object.entries(list(getSupport)(q)).reduce((text, [id, num]) => `${text}${browserNames.get(id)}: ${num}${'\n'}`, '').trimEnd();

// assuming fsPrint is a blocking function
// printBrowserSpec() read in the object, then create a string, then print that string to a file in the 'current directory' - `${process.cwd()}${path.sep}.browserslistrc`
//
const printBrowserSpec = (path, browserObject) => writeFileSync(path, Object.entries(browserObject).reduce((text, [id, num]) => `${text}${'\n'}${id} >= ${num}`, '> 1%'));

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
  console.log(printListResult(verbArgs));
} else if (action === 'print') {
  try {
    printBrowserSpec(`${process.cwd()}${path.sep}.browserslistrc`, list(getSupport)(verbArgs));
    console.log('Printed the browserspec');
  } catch {
    console.log('Printing the browserspec failed');
  }
}
