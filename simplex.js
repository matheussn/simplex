var utils = require('./utils/funcs')

function maximize(z, restrictions) {
  result = {}
  result["func"] = utils.getArrayBase(z, restrictions.length);
  result = utils.getArrayRest(restrictions, result)
  console.log("max z = " + z)
  console.log("S.A.");
  console.log(restrictions)
}

module.exports = {
  maximize: maximize
}