const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(newTeamNames) {
	if (!Array.isArray(newTeamNames)) {
		return false;
	}
  let resultName = [];
  for (let i = 0; i < newTeamNames.length; i++) {
    if (typeof newTeamNames[i] === "string") {
      let newName = newTeamNames[i];
      let newNameWithoutSpacesUpcase = newName.trim().toUpperCase();
      let newChair = newNameWithoutSpacesUpcase[0];
      resultName.push(newChair);
    }
  }
  resultName.sort();
  let resultNameString = resultName.join("");
  return resultNameString;
}

module.exports = {
  createDreamTeam,
};
