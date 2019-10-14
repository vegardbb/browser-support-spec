# browser-support-spec
Javascript-based command line application which generates a list of browsers which supports the input web technologies, by searching the CanIUse API.

## ToDo
1) Define user stories for the module
1) Finish writing this roadmap in the README
1) Define tests for the user stories

## Functionality

This package delivers a command line program with two primary features:

### Standard utility commands
Command: `version`; params: 0
Outputs the current version of the project

Command: `help`; params: 0
Ostensibly describes the different the commands the program will respond to.

### Find web features represented in the CanIUse API
Command: `search`; params: 1
Using the `find` function in the `caniuse` NPM package, the CLI program will print out the names of any web technology whose name matches the input string parameter.

### Build a browser support spec using the CanIUse API
Command: `list`; params: 1..n
Using the `getSupport` function in the `caniuse` package, the CLI program will print out the names (not their abbreviations) of the web browsers which supports all of the features listed as arguments for this command. Names are case sensitive.

Command: `print-spec`; params: 1..n
Functions just like `list`, but instead of logging out the specification to the console, it prints the output list to a new file named `.browserlistrc`, which will be stored in the current directory the user runs the command from.

## Testing

Here follows the organization of the project's testing regime.

### Fake APIs

A set of super simple functions which give out a static set of answers which the defined test cases are aligned against. This means the answer to an API query is hardcoded when running tests.
- fakeWriteFile: Does absolutely nothing for now. Yes, runtime may halt if the program does not have the privilege of writing a file in the current directory, or if there already is a browserlistrc - file in the current directory, but that's on the user, not the program. It is an anonymous function returning TRUE immediately
- fakeCanIUse: A prototype/directory mimicking the functions `getSupport` and `find` from the CanIUse API. Each of the functions returns a valid list of strings corresponding to the defined test case.

### Test cases
A: Searching for features by the keyword "radius" (happy path, `search.test.js`)
B: Getting the names of supported web browsers for the features: "flexbox" (happy path, `list.test.js`)
C: Getting the names of supported web browsers for the features: "border-radius flexbox" (happy path, `list.test.js`) - shall return a support intersection
D: Searching for features by the keyword "none" (empty result, `search.test.js`)
E: Getting the names of supported web browsers for the features: "none" (empty result, `list.test.js`)
F: Getting the names of supported web browsers for the features: "none flexbox" (same result as in case B, `list.test.js`)

### Gottja

Vi utvikler en digital plattform, som vi kaller for Evetro. Evetro hjelper profesjonelle team med å forbedre arbeidet sitt. Evetro oppnår dette ved å føre teamet gjennom en metodikk kalt retrospektiver.

Vi utvikler en digitalt plattform, som vi kaller for Evetro, som hjelper profesjonelle arbeidsteam med å forbedre arbeidet sitt gjennom en møteform kalt retrospektiver.