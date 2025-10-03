var readlineSync = require('readline-sync');

let N1;

let N2;

N1 = Number(readlineSync.question("Digite o valor de N1: "))

N2 = Number(readlineSync.question("Digite o valor de N2: "))

let resultado1 = N1 - 3;

let resultado2 = N2 + 2;

let resultado3 = (resultado1 + resultado2) - 1;

console.log(resultado3);