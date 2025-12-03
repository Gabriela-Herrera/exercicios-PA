const input = require("readline-sync");

let N = input.questionInt("Quantidade de termos: ");

let a = 1, b = 1;
console.log(a);
if (N > 1) console.log(b);

for (let i = 3; i <= N; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}