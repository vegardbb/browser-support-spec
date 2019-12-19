const getHelpText = require('../bin/getHelpText');

// Expected output for arg=100
const expectedHelpText = `
BROWSER-SUPPORT-SPEC(1) 2019-12-18

NAME
  browser-support-spec - A command line utlity for creating a browserlist support file based on a
  set of web technologies.

SYNOPSIS
  browser-support-spec {scope | search keyword | list feature... | print feature...  | {-v |
  --version} | {-h | --help}}

DESCRIPTION
  Browser Support Spec is a command-line tool, which runs in the NodeJS runtime environment. As such
  installing node10 or newer is required for this software to run. It runs queries on the CanIUseAPI
  to generate browser support lists containing the names of all the web browsers which supports all
  of the required web features specified in the query.

  browser-support-spec accepts the following commands:

  scope
    scope is used to print out the name of all of the browsers the tool checks support against. The
    browser scope is the default one for CanIUse programs.
  search
    search is used to list all web technologies whose name matches with the argument "keyword". This
    command is useful for getting to know the different identifiers present in the CanIUse database.
  list
    list is used to print out to the console a list displaying the full name and the oldest stable
    version of each of the web browsers available in the set browserscope which support all of the
    web features/APIs present in the argument "feature".
  print
    print functions just like list, except that instead of printing the browser names to the
    console, print writes a .browserlistrc file containing the CanIUse identifier and the oldest
    stable version of each browser supporting the full set of web features present in the argument
    "feature".
  version
    Display the program version.
  help
    Display this help text. If no other command is selected, this help text will be shown by
    default.

BUGS
  Anomalies for this software may be reported on the URI
  https://github.com/vegardbb/browser-support-spec/issues.

AUTHORS
  Vegard Bjerkli Bugge (vegardbb)

browser-support-spec 1.0.0    18 December 2019    browser-support-spec(1)
`;

// case G
it("breaks lines in the help text that are over 100 characters long", () => {
  const resultString = getHelpText(100);
  expect(resultString.split('\n').every(line => line.length <= 100)).toEqual(true);
  expect(resultString).toEqual(expectedHelpText);
});
