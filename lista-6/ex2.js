let input = require("readline-sync")
let num1 = input.questionInt('Digite um número e mostre os números entre ele e 20:')

num1 = num1 + 1
while (num1 < 20) {
    console.log(num1)
    num1 = num1 + 1
}
