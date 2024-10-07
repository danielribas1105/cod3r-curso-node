const { soma, sub, texto } = require("./calculosBasicos");
const complementares = require("./calculosComplementares");
const { pot, resto } = complementares;
const textoComplementares = complementares.texto;
//const textoComplementares = require("./calculosComplementares").texto;
const { textoDivisao } = require("./calculosDivisao");

let x, y;
x = 20;
y = 3;

console.log(texto);
console.log(soma(x, y));
console.log(sub(x, y));
console.log(textoComplementares);
console.log(pot(x, y));
console.log(resto(x, y));
console.log(textoDivisao(x, y));
