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
	let resultString;
  if (typeof str !== 'string') {
	  str = +str;
  }
  if (typeof options.addition !== "string") {
    options.addition = +(options.addition);
  }

  if (options.separator === undefined) {
	options.separator = "+";
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

	if (options.repeatTimes === undefined) {
		 options.repeatTimes = 0;
	}
	if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 0;
  }

   let additionArray = [];
  for (let i = 0; i <= options.additionRepeatTimes; i++) {
	  additionArray.push(options.addition);
  }
  let additionResultString = additionArray.join(options.additionSeparator);

  let strWithAddition = str + additionResultString;
  let stringArray = [];
  for (let i = 0; i <= options.repeatTimes; i++) {
	stringArray.push(strWithAddition);
  }
  let result = stringArray.join(options.separator);
  return result;
}

module.exports = {
  repeater
};
