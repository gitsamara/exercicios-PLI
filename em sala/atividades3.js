let filmesParaAssistir = [];
let filmesAssistidos = [];

function exibirMenu() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = `
        <button onclick = "adicionarFilme()" >Adicionar filme</button>
        <button onclick = "ordenarLista()" >Ordenar lista</button>
        <button onclick = "pesquisarFilme()" >Pesquisar filme</button>
        <button onclick = "exibirListas()" >Exibir lista</button>
        <button onclick = "marcarFilmeComoAssistido()" >Marcar filme como assistido</button>
        <button onclick = "removerFilme()" >Remover filme</button>
        <button onclick = "encerrarPrograma()" >Encerrar programa</button>
        `;
}

function adicionarFilme() {
    const titulo = prompt("Digite o título do filme: ");
    const ano = prompt("Digite o ano de lançamento do filme: ");
    filmesParaAssistir.push({ titulo, ano });
    alert(`Filme "${titulo}" adicionado com sucesso!`);
    exibirMenu();
}

function ordenarLista() {
    const criterio = prompt("Deseja ordenar por título (1) ou ano de lançamento (2)?");
    if (criterio === '1') {
        filmesParaAssistir.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (criterio === '2') {
        filmesParaAssistir.sort((a, b) => a.ano - b.ano);
    } else {
        alert("Critério inválido. Tente novamente.");
    }
    exibirMenu();
}

function pesquisarFilme() {
    const titulo = prompt("Digite o título do filme que deseja pesquisar: ");
    const filmeEncontrado = filmesParaAssistir.find(filme => filme.titulo === titulo);
    if (filmeEncontrado) {
        alert(`Filme "${titulo}" está na lista de filmes para assistir.`);
    } else {
        alert(`Filme "${titulo}" não encontrado na lista de filmes para assistir.`);
    }
    exibirMenu();
}

function exibirListas() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = '<h2>Filmes para assistir:</h2>';
    filmesParaAssistir.forEach((filme, index) => {
        appDiv.innerHTML += `<p>${index + 1}. ${filme.titulo} (${filme.ano})</p>`;
    });
    appDiv.innerHTML += '<h2>Filmes assistidos:</h2>';
    filmesAssistidos.forEach((filme, index) => {
        appDiv.innerHTML += `<p>${index + 1}. ${filme.titulo} (${filme.ano})</p>`;
    });
    appDiv.innerHTML += '<button onclick="exibirMenu()">Voltar ao menu</button>';
}

function marcarFilmeComoAssistido() {
    if (filmesParaAssistir.length === 0) {
        alert("Não há filmes para assistir.");
    } else {
        const filme = filmesParaAssistir.shift();
        filmesAssistidos.push(filme);
        alert(`Filme "${filme.titulo}" marcado como assistido.`);
    }
    exibirMenu();
}

function removerFilme() {
    const titulo = prompt("Digite o título do filme que deseja remover: ");
    const index = filmesParaAssistir.findIndex(filme => filme.titulo === titulo);
    if (index !== -1) {
        filmesParaAssistir.splice(index, 1);
        alert(`Filme "${titulo}" removido da lista de filmes para assistir.`);
    } else {
        alert(`Filme "${titulo}" não encontrado na lista de filmes para assistir.`);
    }
    exibirMenu();
}

function encerrarPrograma() {
    alert("Programa encerrado.");
}

exibirMenu();