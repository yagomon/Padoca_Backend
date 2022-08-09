const produtosController = require('../controllers/produtos.controller');


const produtos = [
  {
    id: 1,
    nome: 'Pão Francês',
    ingredientes: 'lorem ipsun',
    foto: 'assets/images/pao-frances.png',
    preco: 0.70,
  },

  {
    id: 2,
    nome: 'Baguete',
    ingredientes: 'lorem ipsun',
    foto: 'assets/images/baguete.png',
    preco: 3.00,
  },

  {
    id: 3,
    nome: 'Baguete Francesa Amanteigada',
    ingredientes: 'lorem ipsun',
    foto: 'assets/images/baguete-francesa-manteiga.png',
    preco: 2.70,
  },

  {
    id: 4,
    nome: 'Baguete Francesa de Queijo',
    ingredientes: 'lorem ipsun',
    foto: 'assets/images/baguete-francesa-queijo.png',
    preco: 3.10,
  },
];


const findAllProdutosService = () => {
  return produtos
};

const findProdutoByIdService = (id) => { 
  return produtos.find((produto)=> produto.id == id);
};

const createProdutoService = (newPaleta) => {
  const id = produtos.length + 1;
  newPaleta.id = id
  produtos.push(newPaleta);

  return(
    {
      message:"Nova paleta criada com sucesso",
      ...newPaleta
    }
  )
}

const updateProdutoService = (id, produtoUpdated) => {
  produtoUpdated.id= id;
  const produtoIndex = produtos.findIndex((produto)=>produto.id == id);
  produtos[produtoIndex]= produtoUpdated;
  
  return produtoUpdated;
}

const deleteProdutoService = (id)=>{
  const produtoIndex = produtos.findIndex((produto)=>produto.id == id);
  
  return produtos.splice(produtoIndex,1)
}

module.exports = {
  findAllProdutosService,
  findProdutoByIdService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService
  
}
