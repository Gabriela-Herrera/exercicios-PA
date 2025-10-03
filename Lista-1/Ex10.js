var readlineSync = require('readline-sync');

let N1;

N1 = Number(readlineSync.question("Digite o valor de N1: "));

let resultado1 = N1 / 2 + 3;

let resultado2 = N1 / 2 + 5;

console.log(resultado1, resultado2);