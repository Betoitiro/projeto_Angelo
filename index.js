
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

  // Função para exibir o carrinho de compras
function exibirCarrinho() {
    let carrinhoElement = document.getElementById("itens-carrinho");
    carrinhoElement.innerHTML = "";
  
    // Percorra os itens do carrinho
    for (let i = 0; i < usuarios.length; i++) {
      let usuario = usuarios[i];
  
      // Verifique se o usuário possui itens no carrinho
      if (usuario.carrinho.length > 0) {
        // Para cada item do carrinho, crie um elemento <li> e <img> para exibir a imagem
        usuario.carrinho.forEach(item => {
          let itemElement = document.createElement("li");
  
          let imagemElement = document.createElement("img");
          imagemElement.src = item.imagem;
          imagemElement.alt = item.nome;
  
          itemElement.appendChild(imagemElement);
          carrinhoElement.appendChild(itemElement);
        });
      }
    }
  }
  
  // Função para exibir o valor total do carrinho
  function exibirValorTotal() {
    let valorTotal = 0;
  
    // Percorra os itens do carrinho
    for (let i = 0; i < usuarios.length; i++) {
      let usuario = usuarios[i];
      valorTotal += usuario.valorCompra;
    }
  
    let valorTotalElement = document.getElementById("valor-total");
    valorTotalElement.textContent = "Valor Total: R$" + valorTotal.toFixed(2);
  }
  
