const produtosService = require('../services/produtos.service');

const findAllProdutosController = (req, res) => {
  const produtos= produtosService.findAllProdutosService();
  res.send(produtos);
}

const findProdutoByIdController = (req, res) => {
  const id = +req.params.id;
  console.log(id)
  const produto= produtosService.findProdutoByIdService(id);
  res.send(produto);
}

const createProdutoController = (req, res) => {
  const imputProduto= req.body;
  const newProduto = produtosService.createProdutoService(imputProduto)

  res.send(newProduto);
}

const updateProdutoController = (req, res) => {
  const id = +req.params.id;
  const updateProduto = req.body;
  const produtoUpdated = produtosService.updateProdutoService(id,updateProduto);
  res.send(produtoUpdated);
}

const deleteProdutoController = (req, res) => {
  const id =  +req.params.id;
  const produtosDeleted= produtosService.deleteProdutoService(id);

  res.send(`O produto ${produtosDeleted[0].nome} foi excluído com sucesso!`);
}

module.exports = {
  findAllProdutosController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController
}
