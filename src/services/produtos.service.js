const produtosController = require('../controllers/produtos.controller');

const Produtos = require('../models/Produto');

const findAllProdutosService = async () => {
  const allProdutos = await Produtos.find();
  return allProdutos
};

const findProdutoByIdService = async (id) => { 
  const findOneProduto = await Produtos.findById(id);
  return findOneProduto
};

const createProdutoService = async (newProduto) => {
  const createdProduto = await Produtos.create(newProduto);
  return createdProduto;
}

const updateProdutoService = async (id, produtoUpdated) => {
  const updatedProduto = await Produtos.findByIdAndUpdate(id, produtoUpdated);
  return updatedProduto;
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
