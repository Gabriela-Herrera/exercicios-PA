var readlinesync = require('readline-sync');

let n1 = Number(readlinesync.question("Digite o primeiro numero: "));
let n2 = Number(readlinesync.question("Digite o segundo numero: "));
let n3 = Number(readlinesync.question("Digite o terceiro numero: "));

let soma = n1 + n2 + n3;

if (soma > 20) {
    console.log(`A soma dos numeros é ${soma} e é maior que 20`);
}