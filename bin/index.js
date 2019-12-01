#!/usr/bin/env node

const cliArguments = process.argv.slice(2);

// Element 0 of cliArguments ought to be one of these, but defaults to -h
const verbs = new Map([
  ['-h', 0],
  ['-v', 0],
  ['-s', 1],
  ['-l', 'N'],
  ['-p', 'N'],
  ['--help', 0],
  ['--version', 0],
  ['--search', 1],
  ['--list', 'N'],
  ['--print-spec', 'N'],
]);

const action = cliArguments[0];
const read = verbs.get(cliArguments[0]);

let verbArgs = null;
switch (read) {
  case 0: break;
  case 1: verbArgs = cliArguments[1]; break;
  case 'N': verbArgs = cliArguments.slice(1); break;
  default: break;
}

console.log(cliArguments);
console.log(action);
console.log(read);
console.log(verbArgs);
