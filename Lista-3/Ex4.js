var readlinesync = require('readline-sync');

let n1 = Number(readlinesync.question("Digite o primeiro numero: "));
let n2 = Number(readlinesync.question("Digite o segundo numero: "));
let n3 = Number(readlinesync.question("Digite o terceiro numero: "));

n1 += 5;
n2 += 5;
n3 += 5;

if (n1 > 10) console.log(`Primeiro numero + 5 = ${n1}`);
if (n2 > 10) console.log(`Segundo numero + 5 = ${n2}`);
if (n3 > 10) console.log(`Terceiro numero + 5 = ${n3}`);