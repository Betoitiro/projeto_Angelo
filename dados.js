function salvarNome() {
    var nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome); // Armazena o valor do nome no localStorage
    exibirNome(nome); // Chama a função para exibir o nome na tela principal
    }

    function exibirNome(nome) {
    document.getElementById("exibicao-nome").textContent = "Bem-vindo, " + nome;
    }
