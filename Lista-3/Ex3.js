var readlinesync = require('readline-sync');

let n = Number(readlinesync.question("Digite um numero: "));
let resultado = n - 10;

if (resultado > 3) {
    console.log(`O resultado da subtração é ${resultado} e é maior que 3`);
}