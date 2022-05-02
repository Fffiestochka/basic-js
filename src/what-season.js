const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(myDate) {
  if (!myDate) {
    return "Unable to determine the time of year!";
  }
  //   if (!myDate.hasOwnProperty(getUTCDate)) {
  // 	  throw new Error("Invalid date!");
  //   }
//   if (Object.prototype.toString.call(myDate) !== "[object Date]") {
//     throw new Error("Invalid date!");
//   }
  let arr = Object.keys(myDate);
  if (arr.length > 0) {
	  throw new Error("Invalid date!");
  }
  if (myDate instanceof Date) {
    let myMonth = myDate.getMonth() + 1;
    if (myMonth === 1 || myMonth === 2 || myMonth === 12) {
      return "winter";
    } else if (myMonth === 3 || myMonth === 4 || myMonth === 5) {
      return "spring";
    } else if (myMonth === 6 || myMonth === 7 || myMonth === 8) {
      return "summer";
    } else {
      return "autumn";
    }
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
