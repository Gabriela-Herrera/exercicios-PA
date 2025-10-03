var readlinesync = require('readline-sync');

let n1 = Number(readlinesync.question("Digite o primeiro numero: "));
let n2 = Number(readlinesync.question("Digite o segundo numero: "));

if (n1 === n2) {
    console.log(`Os numeros digitados são iguais: ${n1} e ${n2}`);
}