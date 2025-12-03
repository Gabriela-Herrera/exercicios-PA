const produtos = [
    { nome: "Mouse", preco: 30 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 500 },
    { nome: "Fone de ouvido", preco: 40 },
    { nome: "capinha de celular", preco: 25 },
    { nome: "controle", preco: 50 },
  ];
  
  function produtosAcimaDe50(lista) {
    const resultado = [];
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].preco > 50) {
        resultado.push(lista[i]);
      }
    }
  
    return resultado;
  }
  console.log(produtosAcimaDe50(produtos));