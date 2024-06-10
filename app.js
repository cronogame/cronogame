let listaDeNumerosSorteados = []
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do crono');
    exibirTextoNaTela('p', `Advinhe quantos pintos esse cara chupou entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input'). value;
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', "Acertou!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu quantos pintos o crono chupou com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Um pouco menos');
        } else {
            exibirTextoNaTela('p', 'Muito pouco, ele já fez isso mais vezes, tente novamente');
        }
        tentativas++;
        LimparCampo();
    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true)
   
}














