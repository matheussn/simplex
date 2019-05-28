var utils = require('./utils/funcs')

function maximize(z, restrictions) {
  console.log(utils.getArrayFunc(z))
  console.log("max z = " + z)
  console.log("S.A.");
  console.log(restrictions)
}

module.exports = {
  maximize: maximize
}