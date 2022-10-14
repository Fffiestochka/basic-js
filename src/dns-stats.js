const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let result = {};

    for (let i = 0; i < domains.length; i++) {
      let domain = '';
      let domArr = domains[i].split('.').reverse();

      for (let i = 0; i < domArr.length; i++) {
        domain = `${domain}.${domArr[i]}`;
        // console.log(domain);

        if (Object.keys(result).includes(domain)) {
          result[domain] = result[domain] + 1;
        } else {
          result[domain] = 1;
        }
      }
    }
    // console.log(result);
    return result;
}


module.exports = {
  getDNSStats,
};
