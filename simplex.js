var utils = require('./utils/funcs')
var _ = require('lodash');

function maximize(func, res) {

  while (func.some(utils.possuiNegativo)) {
    /* Pega menor valor da base */
    let indexMenor = utils.pegaMenor(func);

    let indexLinha = utils.escolheLinha(res, indexMenor);

    res[indexLinha] = utils.divideLinha(res, indexLinha, indexMenor)
    
    func = utils.novaLinha(res[indexLinha], func, func[indexMenor])
    
    let pivo = res[indexLinha];

    res = res.map(item => {
            if( !_.isEqual(item, pivo)){
              return utils.novaLinha(pivo, item, item[indexMenor])
            }
            return item;
          })
  }

  console.log("Fim: ")
  console.log("z = " + func)
  console.log("matriz = ")
  console.log(res);
  
}

module.exports = {
  maximize: maximize
}