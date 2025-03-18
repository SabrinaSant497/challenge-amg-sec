let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("btn-remove");
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `Sorteado: ${sorteado}`;
    resultadoLista.appendChild(li);
}
