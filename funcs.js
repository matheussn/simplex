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

/*

function possuiNegativo(v) {
    return v < 0
}

function maximize(obj) {
  var vals = Object.keys(obj.z).map(function(key) {
    return obj.z[key];
  });
  console.log(vals.some(possuiNegativo))
}


maximize({
    z: { z: 1, x1: -5, x2: -4, s1: 0, s2: 0, s3: 0, s4: 0, Sol: 0},
    s1: { z: 0, x1: 6, x2: 4, s1: 1, s2: 0, s3: 0, s4: 0, Sol: 24}
});
*/
