const realHelpText = `
BROWSER-SUPPORT-SPEC(1) 2019-12-18

NAME
  browser-support-spec - A command line utlity for creating a browserlist support file based on a set of web technologies.

SYNOPSIS
  browser-support-spec {scope | search keyword | list feature... | print feature...  | {-v | --version} | {-h | --help}}

DESCRIPTION
  Browser Support Spec is a command-line tool, which runs in the NodeJS runtime environment. As such installing node10 or newer is required for this software to run. It runs queries on the CanIUseAPI to generate browser support lists containing the names of all the web browsers which supports all of the required web features specified in the query.

  browser-support-spec accepts the following commands:

  scope
    scope is used to print out the name of all of the browsers the tool checks support against. The browser scope is the default one for CanIUse programs.
  search
    search is used to list all web technologies whose name matches with the argument "keyword". This command is useful for getting to know the different identifiers present in the CanIUse database.
  list
    list is used to print out to the console a list displaying the full name and the oldest stable version of each of the web browsers available in the set browserscope which support all of the web features/APIs present in the argument "feature".
  print
    print functions just like list, except that instead of printing the browser names to the console, print writes a .browserlistrc file containing the CanIUse identifier and the oldest stable version of each browser supporting the full set of web features present in the argument "feature".
  version
    Display the program version.
  help
    Display this help text. If no other command is selected, this help text will be shown by default.

BUGS
  Anomalies for this software may be reported on the URI https://github.com/vegardbb/browser-support-spec/issues.

AUTHORS
  Vegard Bjerkli Bugge (vegardbb)

browser-support-spec 1.0.0    18 December 2019    browser-support-spec(1)
`;

const padStringWithSpaces = (word, padsLeft = 0) => ((padsLeft > 0) ? ` ${padStringWithSpaces(word, padsLeft - 1)}` : word);
const getSpacePadding = word => word.length - word.trimStart().length;

/** @todo Padding: If the the string starts with a padding of spaces, all divisions of it wil have the same space padding. Assume the 'head' chunk is already padded */
/** @fixme Make divideLine a linear recursive chunk processing function. Needs mmore correct code, plz */
/** @returns An array with one or two elements */
function divideLine(str, last) {
  /** Recursion base case */
  if (str.length <= last) {
    return [str];
  }
  /** Determine how to split the string into a head (processed output) and a tail (recursion) */
  // If character at the 'last' index of the string is a space or the character at the following index is a space,
  // then divide the string at that index. Else find the last index before 'last' which holds a space, and divide there
  let head = str.substring(0, last);
  let tail = str.substring(last);
  if (str.charAt(last) === ' ') {
    return [head].concat(divideLine(padStringWithSpaces(tail.trimStart(), getSpacePadding(head)), last));
  }
  const dividerIndex = head.lastIndexOf(' ');
  head = str.substring(0, dividerIndex);
  tail = str.substring(dividerIndex);
  return [head].concat(divideLine(padStringWithSpaces(tail.trimStart(), getSpacePadding(head)), last));
}

module.exports = function printText(columns) {
  const maxWidth = (Number.isInteger(columns) && columns > 80) ? columns : 80;
  const textRecursively = (list, str) => list.concat(divideLine(str, maxWidth));
  return realHelpText.split('\n').reduce(textRecursively, []).join('\n');
};
