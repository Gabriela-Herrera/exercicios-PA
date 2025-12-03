const input = require("readline-sync");

let opcao = -1;

while (opcao !== 0) {
  console.log("===== MENU PRINCIPAL =====");
  console.log("1 - Calcular Tabuada");
  console.log("2 - Verificar Número Primo");
  console.log("3 - Gerar Sequência de Fibonacci");
  console.log("4 - Calcular Fatorial");
  console.log("0 - Sair");
  console.log("==========================");

  opcao = input.questionInt("Escolha: ");

  if (opcao === 1) {
    let n = input.questionInt("Número: ");
    for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n*i}`);

  } else if (opcao === 2) {
    let n = input.questionInt("Número: ");
    let primo = true;
    for (let i = 2; i < n; i++) if (n % i === 0) primo = false;
    console.log(primo ? "É primo" : "Não é primo");

  } else if (opcao === 3) {
    let N = input.questionInt("Quantidade de termos: ");
    let a = 1, b = 1;
    console.log(a);
    if (N > 1) console.log(b);
    for (let i = 3; i <= N; i++) {
      let c = a + b;
      console.log(c);
      a = b; b = c;
    }

  } else if (opcao === 4) {
    let n = input.questionInt("Número: ");
    let fat = 1;
    for (let i = n; i >= 1; i--) fat *= i;
    console.log("Fatorial =", fat);

  } else if (opcao === 0) {
    console.log("Saindo...");
  } else {
    console.log("Opção inválida!");
  }
}