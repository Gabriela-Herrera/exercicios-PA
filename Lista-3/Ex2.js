var readlinesync = require('readline-sync');

let n = Number(readlinesync.question("Digite um numero: "));
let resultado = n + 5;

if (resultado > 10) {
    console.log(`O resultado da soma é ${resultado} e é maior que 10`);
}