const aluno = {
    nome: "Mariane",
    idade: 18,
    curso: "Nutrição"
  };
  
  function apresentarAluno(a) {
    return `O aluno ${a.nome} tem ${a.idade} anos e faz o curso de ${a.curso}.`;
  }
  console.log(apresentarAluno(aluno));