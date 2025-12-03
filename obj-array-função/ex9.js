/* CONTA DO USUÁRIO */
const conta = {
    agencia: "2506",
    numero: "729",
    senha: "515",
    saldo: 800
};


/* VALIDAR ACESSO */
function validarAcesso(ag, nc, s) {
    if (ag === conta.agencia && nc === conta.numero && s === conta.senha) {
        return true;
    } else {
        return false;
    }
}


/* EXIBIR SALDO */
function mostrarSaldo() {
    return `Seu saldo atual é: R$ ${conta.saldo}`;
}


/* SACAR (com cálculo de cédulas) */
function sacar(valor) {

    if (valor > conta.saldo) {
        return "Saldo insuficiente!";
    }

    conta.saldo = conta.saldo - valor;

    let notas = [100, 50, 20, 10];
    let cedulas = {};

    let resto = valor;

    for (let i = 0; i < notas.length; i++) {
        let notaAtual = notas[i];
        let qtd = Math.floor(resto / notaAtual);
        cedulas[notaAtual] = qtd;
        resto = resto - (qtd * notaAtual);
    }

    return cedulas;
}
