var readlinesync = require('readline-sync');

let n1 = Number(readlinesync.question("Digite o primeiro numero: "));
let n2 = Number(readlinesync.question("Digite o segundo numero: "));

if ((n1 + n2) < 20) {
    console.log(`Primeiro numero x 10 = ${n1 * 10}`);
    console.log(`Segundo numero x 10 = ${n2 * 10}`);
}