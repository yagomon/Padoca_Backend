const produtosController = require('../controllers/produtos.controller');

const Produtos = require('../models/Produto');

const findAllProdutosService = async () => {
  const produtos = await Produtos.find();
  return produtos
};

const findProdutoByIdService = async (id) => { 
  const produto = await Produtos.findById(id);
  return produto
};

const createProdutoService = async (newProduto) => {
  const Produto = await Produtos.create(newProduto);
  
  return Produto;
}

const updateProdutoService = async (id, produtoUpdated) => {
  const produto = await Produtos.findByIdAndUpdate(id, produtoUpdated);
  
  return produto;
}

const deleteProdutoService = async (id)=>{
  const deleteProduto = await Produtos.findByIdAndRemove(id)
  return {message: "Produto deletado com suceso!"}
}

module.exports = {
  findAllProdutosService,
  findProdutoByIdService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService
  
}
