const input = require("readline-sync");

let senha = input.question("Digite a senha: ");

while (senha !== "1234") {
  senha = input.question("Senha incorreta! Tente novamente: ");
}

console.log("Acesso permitido");
