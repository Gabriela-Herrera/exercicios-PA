function mediaNotas(notas) {
    let soma = 0;
  
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
  
    return soma / notas.length;
  }
  console.log(mediaNotas([7, 8, 4, 9]));