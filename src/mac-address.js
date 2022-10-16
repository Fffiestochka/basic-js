const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    let arr = n.split('-');

    if (arr.length < 6) {
      return false;
    }

    const hex = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];

    let result;

    for (let i = 0; i < arr.length; i++) {
      let group = arr[i].split('');
      // console.log(group[0], group[1]);

      if (hex.includes(group[0]) && hex.includes(group[1])) {
        // console.log(
        //   group[0],
        //   hex.includes(group[0]),
        //   group[1],
        //   hex.includes(group[1])
        // );
        result = true;
      } else {
        return false;
      }
    }

    return result;

}
module.exports = {
  isMAC48Address
};
