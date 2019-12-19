#!/usr/bin/env node
const getHelpText = require('./getHelpText');
const { version } = require('../package.json');

// Example: ['search', 'fetch']
const cliArguments = process.argv.slice(2);

// action := scope, search (1), list (n), print (n), version, help
const action = cliArguments[0];

let verbArgs = null;
if (action === 'search') {
  verbArgs = cliArguments[1];
} else if (action === 'list' || action === 'print') {
  verbArgs = cliArguments.slice(1);
}

console.log(cliArguments);
console.log(action);
console.log(verbArgs);

if (action === 'help') {
  console.log(getHelpText(process.stdout.columns));
} else if (action === 'version') {
  console.log(`v${version}`);
}
