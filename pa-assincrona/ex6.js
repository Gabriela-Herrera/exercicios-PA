const input = require("readline-sync");

let qtd = input.questionInt("Quantidade de alunos: ");

for (let a = 1; a <= qtd; a++) {
  let soma = 0;
  for (let i = 1; i <= 3; i++) {
    soma += input.questionFloat(`Nota ${i} do aluno ${a}: `);
  }

  let media = soma / 3;
  console.log("Média =", media);

  if (media >= 7) console.log("Aprovado");
  else console.log("Reprovado");
}