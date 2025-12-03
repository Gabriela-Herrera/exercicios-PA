const compras = [
    { nome: "Canetinhas", quantidade: 1, preco: 30 },
    { nome: "Luva", quantidade: 1, preco: 25 },
    { nome: "Tênis", quantidade: 3, preco: 200 },
    { nome: "Caderno", quantidade: 2, preco: 50 },
    { nome: "Mochila", quantidade: 1, preco: 150 },
    { nome: "Boné", quantidade: 1, preco: 35 },
  ];
  
  function totalCompras(lista) {
    return lista.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }
  console.log(totalCompras(compras));