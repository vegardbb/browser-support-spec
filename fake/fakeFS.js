// technically a stub, but we throw in the timer just to simulate I/O
// options is an optional argument
exports.writeFile = function fakeWriteFile(file, data, options, callback) {
  let cb = () => true;
  if (typeof callback === 'function') {
    cb = callback;
  }
  else if (typeof options === 'function') {
    cb = options;
  }
  else {
    throw new Error('Callback required!');
  }
  setTimeout(cb, 500);
}
