var _ = require('lodash')

const regex = /[+=]/;

function getArrayBase(f, numRes) {
  res = [];
  f = _.split(f, regex);
  res['func'] = 1;
  _.map(f, (item) => {
    item = _.trim(item);
    res[item[1]] = parseInt(item[0])
  });
  
  for (i = 0; i < numRes; i ++) {
    res["s"+i] = 0;
  }

  res['Sol'] = 0;
  
  return res;
}

function getArrayRest(rest, result) {
  _.map(rest, (item) => {
    item = item.split(regex);
  })

  return result;
}

module.exports = {
  getArrayBase: getArrayBase,
  getArrayRest: getArrayRest
}
