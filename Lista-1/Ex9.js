var readlineSync = require('readline-sync');

let N1;

N1 = Number(readlineSync.question("Digite o valor de N1: "));

let resultado1 = (N1 - 3) + N1;

console.log(resultado1);