var readlineSync = require('readline-sync');
let N1;
N1 = Number(readlineSync.question('Digite o numero referente da tabuada a ser solicitada: '))
console.log("1 * " + N1 + " = " + N1);

resultado1 = N1 * 2;
console.log("2 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 3;
console.log("3 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 4;
console.log(`4 * ${N1} = ${resultado1}`);

resultado1 = N1 * 5;
console.log("5 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 6;
console.log("6 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 7;
console.log("7 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 8;
console.log("8 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 9;
console.log("9 * "+ N1 + " = " + resultado1);

resultado1 = N1 * 10;
console.log("10 * "+ N1 + " = " + resultado1);

function Limpa(){
    setTimeout(() =>{
        console.clear()
    }, 10000);
}
Limpa();
