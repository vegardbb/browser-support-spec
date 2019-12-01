# Testing

Here follows a short description of the test regime of this project. A unit testing suite known as Jest is employed here. Jest is widely known for being a fully featured test suite whose documentation is clear and concise, and is thus an easy tool to start using for testing NodeJS projects.

## Test cases

Each of the test cases on the project is identified by a capital letter. Each letter in this listing corresponds to a one-line comment above the test case function executing the case.

```javascript
// case A
it("Name of test case A", () => {
  // Code for test case A goes here
});
```

### A) searches for features containing the keyword 'radius'

This test case is implemented within the file `search.test.js`, and we expect the "search" module to return an array with only one string element, 'border-radius', when receiving 'radius' as argument.

### B) gets the IDs and versions of supported web browsers for the features denoted in the string 'flexbox'

This test case is implemented within the file `list.test.js`. We expect the "list" module to return an object with a total of 16 key-value elements naming the web browsers (by their caniuse API ID) and the lowest version supporting the feature "flexbox".

### C) gets the IDs and versions of supported web browsers for the features denoted in the string 'border-radius flexbox'

This test case is implemented within the file `list.test.js`. We expect the "list" module to return an object with a total of 15 key-value elements naming the web browsers (by their caniuse API ID) and the lowest version supporting both of the features "border-radius" and "flexbox".

### D) searches for features containing the keyword 'none'

This test case is implemented within the file `search.test.js`, and we expect the "search" module to return an array with zero string elements when receiving 'none' as argument.

### E) gets the IDs and versions of supported web browsers for the features denoted in the string 'none'

The string "none" does not correspond to any Web or ES feature, thus the query result in this test case found in `list.test.js` should be an empty object.

### F) gets the IDs and versions of supported web browsers for the features denoted in the string 'none flexbox'

This test case expects precisely the same result as in case B. It is implemented in the file `list.test.js`. Reason being is that the string "none" does not correspond to any Web or ES feature, and so we expect the module to disregard "none" from the argument.
