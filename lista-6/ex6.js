const readlineSync = require("readline-sync")

let numero = readlineSync.questionInt("Digite um numero menor que 10: ")
while (numero >= 10) {
  numero = readlineSync.questionInt("Valor invalido. Digite um numero menor que 10: ")
}
console.log("O numero digitado foi " + numero)
