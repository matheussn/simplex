var _ = require('lodash')

function getArray(f) {
  return _.replace(f, " ", '');
}

module.exports = {
  getArrayFunc: getArray
}