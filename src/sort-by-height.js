const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrCopy = arr.slice();
  let sortedWithoutONe = arrCopy
    .filter((number) => number !== -1)
    .sort((a, b) => b - a);

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resultArr.push(-1);
    } else {
      resultArr.push(sortedWithoutONe.pop());
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight,
};
