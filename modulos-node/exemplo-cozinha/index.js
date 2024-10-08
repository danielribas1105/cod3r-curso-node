//const acoes = require("./cozinha/acoesCozinhar");
//const { alimentos } = require("./cozinha/alimentos");
//const receita = require("./receita");

//console.log(acoes.cozinhar(alimentos[0]));

//const cozinha = require("./cozinha");

//console.log(cozinha);
//console.log(cozinha.ferver(cozinha.alimentos[2]));

//console.log(receita(cozinha.alimentos, cozinha.cortar, cozinha.assar));
//console.log(receita(["carne", "alface"], cozinha.cortar, cozinha.assar));

const refeicao = require("./refeicao")("Almoço");
//console.log(refeicao);
refeicao("arroz", "feijão", "batata");
const refeicao2 = require("./refeicao")("Jantar");
refeicao2("arroz", "feijão", "batata");