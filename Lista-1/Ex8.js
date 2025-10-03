var readlineSync = require('readline-sync');

let N1;

let N2;

let N3;

N1 = Number(readlineSync.question("Digite o valor de N1: "));

N2 = Number(readlineSync.question("Digite o valor de N2: "));

N3 = Number(readlineSync.question("Digite o valor de N3: "));

let resultado1 = N1 + 10;

let resultado2 = N2 - 5;

let resultado3 = N3 * 2;

console.log(resultado1, resultado2, resultado3);