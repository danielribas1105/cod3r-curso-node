const { resto } = require("./calculosComplementares");

function div(a, b) {
   return a/b;
}

function textoDivisao(a, b) {
   return `A divisão de ${a} por ${b} é igual a ${div(a, b)} e o resto é ${resto(a, b)}.`
}

module.exports = {
   textoDivisao
}