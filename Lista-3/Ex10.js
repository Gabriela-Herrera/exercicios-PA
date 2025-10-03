var readlinesync = require('readline-sync');

let n1 = Number(readlinesync.question("Digite um numero: "));

if (n1 < 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n1} x ${i} = ${n1 * i}`);
    }
}

/* OU */

var readlinesync = require('readline-sync');

let n2 = Number(readlinesync.question("Digite um numero: "));

if (n2 < 10) {
    let resultado;

    resultado = n2 * 1;
    console.log(`1 * ${n2} = ${resultado}`);

    resultado = n2 * 2;
    console.log(`2 * ${n2} = ${resultado}`);

    resultado = n2 * 3;
    console.log(`3 * ${n2} = ${resultado}`);

    resultado = n2 * 4;
    console.log(`4 * ${n2} = ${resultado}`);

    resultado = n2 * 5;
    console.log(`5 * ${n2} = ${resultado}`);

    resultado = n2 * 6;
    console.log(`6 * ${n2} = ${resultado}`);

    resultado = n2 * 7;
    console.log(`7 * ${n2} = ${resultado}`);

    resultado = n2 * 8;
    console.log(`8 * ${n2} = ${resultado}`);

    resultado = n2 * 9;
    console.log(`9 * ${n2} = ${resultado}`);

    resultado = n2 * 10;
    console.log(`10 * ${n2} = ${resultado}`);
};