let jogadores = [
    {nome: "Alice", pontos: 50},
    {nome: "Livia", pontos: 150},
    {nome: "Carol", pontos: 300},
    {nome: "Luiza", pontos: 145},
    {nome: "Flavia", pontos: 250},
    {nome: "Julia", pontos: 190},
];

function ranking(jogadores) {
    return jogadores.sort((a, b) => b.pontos - a.pontos);
}
console.log(ranking(jogadores));