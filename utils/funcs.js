var _ = require('lodash')

function possuiNegativo(v) {
    return v < 0
}

function pegaMenor(arr) {
  let flag = arr[0];
  arr.forEach(element => {
    if(element < flag) {
      flag = element;
    }
  });

  return arr.indexOf(flag);
}

function divideLinha(linha, indexLinha, indice) {
  const div = linha[indexLinha][indice];
  return linha[indexLinha].map(item => {
    return item / div;
  });
}

function escolheLinha(linha, indice) {
  let flag = Infinity, response;
  linha.forEach(item => {
    let div = item[item.length - 1] / item[indice];
    if(div > 0 && div < flag) {
      flag = div;
      response = linha.indexOf(item);
    }
  });

  return response
}

function multiplicaLinha(linha, mult) {
  return linha.map(item => item * mult);
}

function subtraiLinha(linha1, linha2) {
  let newLine = []
  for(let i = 0; i < linha1.length; i ++) {
    newLine[i] = linha1[i] - linha2[i];
  }
  return newLine;
}

function novaLinha(arr, func, mult) {
  return subtraiLinha(func , multiplicaLinha(arr, mult))
}

module.exports = {
  possuiNegativo: possuiNegativo,
  pegaMenor: pegaMenor,
  divideLinha: divideLinha,
  escolheLinha: escolheLinha,
  novaLinha: novaLinha
}