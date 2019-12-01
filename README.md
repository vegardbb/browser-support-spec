# browser-support-spec
Javascript-based command line application which generates a list of browsers which supports the input web technologies, by searching the CanIUse API.

## ToDo
1) Define user stories for the module
2) Finish writing this roadmap in the README
3) Define tests for the user stories

## Functionality

This package delivers a command line program with two primary features:

### Standard utility commands

| Command | #Args | Description |
| --- | --- | --- |
| `version` | 0 | Outputs the current version of the project |
| `help` | 0 | Ostensibly describes the different the commands the program will respond to |

### Find web features represented in the CanIUse API

| Command | #Args | Description |
| --- | --- | --- |
| `search` | 1 | Using the `find` function in the `caniuse` NPM package, the CLI program will print out the names of any web technology whose name matches the input string parameter |

### Build a browser support spec using the CanIUse API

| Command | #Args | Description |
| --- | --- | --- |
| `list` | 1..n | Using the `getSupport` function in the `caniuse` package, the CLI program will print out the names (not their abbreviations) of the web browsers which supports all of the features listed as arguments for this command. Names are case sensitive. |
| `print-spec` | 1..n | Functions just like `list`, but instead of logging out the specification to the console, it prints the output list to a new file named `.browserlistrc`, which will be stored in the current directory the user runs the command from. |
