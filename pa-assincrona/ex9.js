const input = require("readline-sync");

let palavra = input.question("Digite uma palavra: ");
let cont = 0;
let vogais = "aeiouAEIOU";

for (let i = 0; i < palavra.length; i++) {
  if (vogais.includes(palavra[i])) cont++;
}

console.log("Quantidade de vogais:", cont);