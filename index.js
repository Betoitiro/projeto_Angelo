let usuarios = []

function cadastrar(){
    let nome = document.getElementById("nome").value;
    let Senha = document.getElementById("password").value;

    let usuario = (nome, Senha);
    usuarios.push(usuario);

    document.getElementById("nome-usuario").textContent = nome
}