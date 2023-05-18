
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
function adicionarCarrinho(item){
    let nomeuser = document.getElementById("nome-usuario").textContent;
    let user = usuarios.find(u => u.nome === nomeuser);

    if(user){
        usuario.carrinho.push(item);
        usuario.valorCompra += item.preco;

        exibirCarrinho(usuario.carrinho);
        exibirValorCompra(usuario.valorCompra);
    }
}

function fazerPedido(){
    let nomeuser = document.getElementById("nome-usuario").textContent;
    let user = usuarios.find(u => u.nome === nomeuser);

    if(usuario){
        usuario.carrinho=[]
        usuario.valorCompra = 0;
        usuario.pedido = " ";

        exibirCarrinho(usuario.carrinho);
        exibirValorCompra(usuario.valorCompra);
        exibirPedido(usuario.pedido);
    }
}

function exibirCarrinho(carrinho) {
    let carrinhoElement = document.getElementById("carrinho");
    carrinhoElement.innerHTML = "";
  
    carrinho.forEach(item => {
      let itemElement = document.createElement("li");
      itemElement.textContent = item.nome;
      carrinhoElement.appendChild(itemElement);
    });
  }

  function exibirValorCompra(valor){

  }

  function exibirPedido(pedido){
    
  }
