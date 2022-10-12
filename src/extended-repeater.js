const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
if (typeof str !== 'string') {
  str = String(str);
}
if (typeof options.addition !== 'string' && options.addition !== undefined) {
  options.addition = String(options.addition);
}

if (typeof options.separator === 'undefined') {
  options.separator = '+';
}

if (typeof options.additionSeparator === 'undefined') {
  options.additionSeparator = '|';
}

if (typeof options.repeatTimes === 'undefined') {
  options.repeatTimes = 0;
}
if (typeof options.additionRepeatTimes === 'undefined') {
  options.additionRepeatTimes = 0;
}

let additionArray = [];
if (options.addition && options.additionRepeatTimes) {
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArray.push(options.addition);
  }
}
let additionResultString = '';
if (options.addition) {
  additionResultString = options.additionRepeatTimes
    ? additionArray.join(options.additionSeparator)
    : options.addition;
}
// console.log('additionResultString', additionResultString);
// console.log('str', str);

let strWithAddition = `${str}${additionResultString}`;
// console.log('strWithAddition', strWithAddition);

let stringArray = [];
if (!options.repeatTimes) {
  stringArray.push(strWithAddition);
} else {
  for (let i = 0; i < options.repeatTimes; i++) {
    stringArray.push(strWithAddition);
  }
}

let result = stringArray.join(options.separator);
return result;
}

module.exports = {
  repeater,
};
