let listaDeAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Amigo Secreto');
    exibirTextoNaTela('p', 'Adicione os amigos para o sorteio:');
}

mensagemInicial();

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value.trim();
    
    if (nome === '') {
        exibirTextoNaTela('p', 'Por favor, digite um nome válido!');
        return;
    }
    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    
    listaDeAmigos.forEach((nome) => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 1) {
        exibirTextoNaTela('p', 'Adicione um amigo para sortear!');
        return;
    }
    
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${sorteado}</strong>`;
    
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJogo() {
    listaDeAmigos = [];
    atualizarLista();
    exibirTextoNaTela('p', 'Adicione os amigos para o sorteio:');
    document.querySelector('#resultado').innerHTML = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}