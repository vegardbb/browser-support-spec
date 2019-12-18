#!/usr/bin/env node
const getHelpText = require('./getHelpText');
const cliArguments = process.argv.slice(2);

/**
 * @todo Define options for each of the commands browserscope, search, list and print-spec
 */

const optionsMap = [
  { short: '-v', long: '--version', description: 'Output the version number of Browser Support Spec' },
  { short: '-h', long: '--help', description: 'Output this usage information. If no option is selected, this help text will be shown by default' },
  { short: '-b', long: '--browserscope', description: 'Print out the name of all of the browsers the tool checks support against (hint: It is the default CanIUse API scope)' },
  { short: '-s', long: '--search', optionArg: '<keyword>', description: 'List all web technologies whose name matches with the argument "keyword"' },
  { short: '-l', long: '--list', optionArg: '[features]', description: 'Print out the name and the oldest stable version of the web browsers in the set browserscope which support all of the web features/APIs present in the argument "features"' },
  { short: '-p', long: '--print-spec', optionArg: '[features]', description: 'Print a .browserlistrc file containing all browsers in the browserscope which support all of the web features/APIs present in the argument "features"' },
];

const verbs = new Map(optionsMap.reduce((matrix, { short, long, optionArg }) => {
  let argNum = 0;
  if (optionArg) {
    if (optionArg[0] === '<') argNum = 1;
    else if (optionArg[0] === '[') argNum = 'N';
  }
  return matrix.concat([[short, argNum], [long, argNum]]);
}, []));

const action = cliArguments[0];
const read = verbs.get(cliArguments[0]);

// Option arguments read in by each option's respective function
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

if (action === '-h' || action === '--help') {
  console.log(getHelpText(process.stdout.columns));
}

// Printing help text //

// Padding: 2*space + 2*shorthand + komma + space + 2*- + x*kommando + y*descriptionpadding(min 2)
const getOptionCommand = ({ short, long, optionArg }) => `  ${short}, ${long} ${typeof optionArg === 'string' ? `${optionArg}  ` : ' '}`;

function getOptionDescriptionPadding(option, requiredLength) {
  let spaces = '';
  while (spaces.length < requiredLength - getOptionCommand(option).length) {
    spaces = ` ${spaces}`;
  }
  return spaces;
}

// Use countMinPadding to determine how many spaces to pad up to the description, useful for both the command part and description part
const optionStringLength = optionsMap.map(obj => getOptionCommand(obj).length).sort().pop();

/** @returns An array with two elements */
function divideComment(str, columns) {
  // const columns = Number.isInteger(process.stdout.columns) ? process.stdout.columns - 1 : 79;
  // if (str.length < columns + 1) return str;
  const partOne = str.substring(0, columns);
  if (str.charAt(columns) === ' ') return [partOne, str.substring(columns, str.length)];
  // find the last index with space before 79/columns
  const i = partOne.lastIndexOf(' ');
  return [str.substring(0, i), str.substring(i, str.length)];
}
