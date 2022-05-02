const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(background) {
  let catsEars = "^^";
  let result = 0;
  for (let i = 0; i < background.length; i++) {
	  for (let j = 0; j < background[i].length; j++) {
		  if (background[i][j] === catsEars) {
			result += 1;
		  }
	  }
  }
  return result;

}

module.exports = {
  countCats
};
