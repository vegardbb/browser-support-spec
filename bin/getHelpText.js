/**
 * @function padStringWithSpaces
 * @returns {String} The input string line, but with padsLeft spaces of indentation
 */
const padStringWithSpaces = (word, padsLeft = 0) => ((padsLeft > 0) ? ` ${padStringWithSpaces(word, padsLeft - 1)}` : word);

/**
 * @function getSpacePadding
 * @returns {Number} How many spaces a string has been indented with
 */
const getSpacePadding = word => word.length - word.trimStart().length;

/** @returns {Array[String]} The split version of the string, where each line has a capped number of letters */
function divideLine(str, last) {
  /** Recursion base case */
  if (str.length <= last) {
    return [str];
  }
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

module.exports = function splitTextBy(text, columns) {
  const maxWidth = (Number.isInteger(columns) && columns > 80) ? columns : 80;
  const textRecursively = (list, str) => list.concat(divideLine(str, maxWidth));
  return text.split('\n').reduce(textRecursively, []).join('\n');
};
