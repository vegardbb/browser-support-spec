# Fake APIs

This directory contains a set of super simple functions, each of which returns a static set of answers which the defined test cases are aligned against. This means the answer to an API query is hardcoded when running tests.
 - fakeFS: A prototype faking the file system functions from the native Node API
   - writeFile: A function which first sleeps for half a second, then returns `callback()`
 - fakeCanIUse: A prototype/directory mimicking the functions `getSupport` and `find` from the CanIUse API. Each of the functions returns a valid list of strings corresponding to the defined test case.
  - getSupport
  - find

Concerning the 'writeFile' function from fakeFS: You may be aware that the NodeJS runtime may halt if the program does not have the privilege of writing a file in the current directory, or if there already is a browserlistrc - file in the current directory, but that is an error on the computing environment, not the program itself. Thus, 'writeFile' is merely an anonymous function returning TRUE immediately.
