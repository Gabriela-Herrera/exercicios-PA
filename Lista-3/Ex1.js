var readlinesync = require('readline-sync');

let n1 = Number(readlinesync.question("digite um numero: "));

if(n1<5){
    console.log(`O numero digitado foi ${n1} e ele é menor que 5`)
};