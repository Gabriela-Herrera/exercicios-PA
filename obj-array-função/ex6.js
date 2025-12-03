const biblioteca = [
    { Título: "A Culpa é das Estrelas", Autor: "John Green", Ano: 2012 },
    { Título: "Os Dois Morrem no Final", Autor: "Adam Silvera", Ano: 2017 },
    {Título: "Harry Potter e a Pedra Filosofal", Autor: "J.K. Rowling", Ano:1997},
    {Título: "O Pequeno Principe", Autor: "Antoine de Saint-Exupéry", Ano: 1943},
    {Título: "Hamlet", Autor: "William Shakespeare", Ano: 1623},
];

function livrosRecentes (biblioteca){
    return biblioteca.filter(livro => livro.Ano > 2010);
}
console.log(livrosRecentes(biblioteca))