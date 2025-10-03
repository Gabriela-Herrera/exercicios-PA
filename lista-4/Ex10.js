const input = require('readline-sync')

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")

let menor;
let maior;

if (num1 < num2) {
    menor = num1
    maior = num2
} else {
    menor = num2
    maior = num1
}

let menorMultiplicado = menor * 10
let maiorDividido = maior / 2
let resultado = menorMultiplicado + maiorDividido

if (resultado % 2 === 0) {
    console.log("O resultado é par")
} else {
    console.log("O resultado é ímpar")
}
