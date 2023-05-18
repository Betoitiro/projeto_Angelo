
let usuarios = []

function cadastrar(){
    let nome = document.getElementById("nome").value;
    let Senha = document.getElementById("password").value;

    let usuario = {
        nome: nome,
        Senha: Senha,
        carrinho : [],
        valorCompra: 0,
        pedido: " "
    };
    usuarios.push(usuario);

    document.getElementById("nome-usuario").textContent = nome;
  }
