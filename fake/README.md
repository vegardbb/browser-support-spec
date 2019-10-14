# Fake APIs

A set of super simple functions which give out a static set of answers which the defined test cases are aligned against. This means the answer to an API query is hardcoded when running tests.
 - fakeFS: A prototype faking the file system functions from the native Node API
   - writeFile: A function which first sleeps for half a second, then returns `callback()`
 - fakeCanIUse: A prototype/directory mimicking the functions `getSupport` and `find` from the CanIUse API. Each of the functions returns a valid list of strings corresponding to the defined test case.
  - getSupport
  - find
_
## TODO
* Write fake api files and define the two cases
