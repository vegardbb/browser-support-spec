# browser-support-spec
NodeJS-based command line application which generates a list of browsers which supports the input web technologies, by searching the CanIUse API.

## ToDo
1) Complete manual page
1) Implement command line utility

## Setup

Install **browser-support-spec** globally in NPM:
```bash
npm i browser-support-spec -g
```
Upon whence you may print want to out the package version in the console:
```bash
browser-support-spec version
```
If you want to uninstall this utility, run this
```bash
npm uninstall -g browser-support-spec
```

## Functionality

This package delivers a command line program with two primary features:

### Standard utility commands

  browser-support-spec {scope | search keyword | list feature... | print feature...  | version | help}

| Command| #Args | Description |
| --- | --- | --- |
| `version` | 0 | Outputs the current version of the project |
| `help` | 0 | Ostensibly describes the different the commands the program will respond to |
| `scope` | 0 | Print out the name of all of the web browsers browser-support-spec checks support against |

### Find web features represented in the CanIUse API

| Command| #Args | Description |
| --- | --- | --- |
| `search` | 1 | Using the `find` function in the `caniuse` NPM package, the CLI program will print out the names of any web technology whose name matches the input string parameter |

### Build a browser support spec using the CanIUse API

| Command| #Args | Description |
| --- | --- | --- |
| `list` | 1..n | Using the `getSupport` function in the `caniuse` package, the CLI program will print out the names (not their abbreviations) of the web browsers which supports all of the features listed as arguments for this command. Names are case sensitive. |
| `print` | 1..n | Functions just like `list`, but instead of logging out the specification to the console, it prints the output list to a new file named `.browserlistrc`, which will be stored in the current directory the user runs the command from. |
