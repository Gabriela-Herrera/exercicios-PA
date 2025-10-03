var readlinesync = require('readline-sync');

let n = Number(readlinesync.question("Digite um numero: "));
let resultado = n * 3;

if (resultado > 15) {
    console.log(`O resultado da multiplicação é ${resultado} e é maior que 15`);
}