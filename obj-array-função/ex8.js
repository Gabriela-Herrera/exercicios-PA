const pessoas = [
    { nome: "Guilherme", idade: 18 },
    { nome: "Giulia", idade: 18 },
    { nome: "Caroline", idade: 20 },
    { nome: "Diego", idade: 35 },
    { nome: "Mariane", idade: 19 },
    { nome: "Aline", idade: 15 },
  ];
  
  function maioresDeIdade(lista) {
    return lista.filter(p => p.idade > 18);
  }
  console.log(maioresDeIdade(pessoas));