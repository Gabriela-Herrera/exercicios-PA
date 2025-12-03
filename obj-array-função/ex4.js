let listaDeNomes = ["Oliver", "Gabriel", "Guilherme", "Gabriela"]

function pushArray(valor, array=[]){
    array[array.length]=valor
}
pushArray("Mariane", listaDeNomes)
console.log(listaDeNomes)