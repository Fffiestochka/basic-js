const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n)
    .split('')
    .map((item) => +item);
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let copyArr = arr.slice(0);
    copyArr.splice(i, 1);
    let current = Number(copyArr.join(''));

    if (current > max) {
      max = current;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
