var readlinesync = require('readline-sync');

let n = Number(readlinesync.question("Digite um numero: "));
let resultado = n / 2;

if (resultado > 20) {
    console.log(`O resultado da divisão é ${resultado} e é maior que 20`);
}