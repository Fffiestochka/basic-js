const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) return arr;
  let resultArray = [];
  let isDiscardNext;

  for (let i = 0; i < arr.length; i++) {   // проходим по массиву

    if (arr[i] === "--discard-next") {     //удалить следующий
      isDiscardNext = true; 					// ничего не добавляем, вешаем флаг

    } else if (arr[i] === "--discard-prev") {   // удалить предыдущий
      if (arr[i - 2] && arr[i - 2] === "--discard-next") {        // если предпредыдущий элемент существует и явл.--discard-next
        continue;  // ничего не делаем - предыдущий уже удален
      } else if (arr[i - 1]) {  // иначе, если существует предыдущий элемент
        resultArray.pop(); 	// удаляем его
      }

    } else if (arr[i] === "--double-next") {      // дублировать следующий
      if (arr[i + 1]) {		// если след.эл.сущ-т
        resultArray.push(arr[i + 1]); // добавляем его
      }

    } else if (arr[i] === "--double-prev") {      // дублировать предыдущий
		if (arr[i - 2] && arr[i - 2] === "--discard-next") {      // если предпредыдущий элемент существует и явл.--discard-next
			continue;  // ничего не делаем - предыдущий удален
    } else if (arr[i - 1]) {        // если предыдущ.эл.существует
        resultArray.push(arr[i - 1]); // добавляем его (повторно)
      }

    } else {      // для обычных элементов
      if (isDiscardNext === true) {        // если флаг "удалить следующий"
        isDiscardNext = false; // снимаем его
      } else {        // если флага нет -  просто добавляем элемент
        resultArray.push(arr[i]);
      }
    }
  }
  return resultArray;
}

module.exports = {
  transform,
};
