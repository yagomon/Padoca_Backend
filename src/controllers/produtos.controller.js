const produtosService = require('../services/produtos.service');
const mongoose = require('mongoose');

const findAllProdutosController = async (req, res) => {
  const allProdutos = await produtosService.findAllProdutosService();
  if (allProdutos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma produto cadastrado!' });
  }

  res.send(allProdutos);
};

const findProdutoByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenProduto = await produtosService.findProdutoByIdService(idParam);
  if (!chosenProduto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }

  res.send(chosenProduto);
};

const createProdutoController = async (req, res) => {
  const newProduto = req.body;

  const createdProduto = await produtosService.createProdutoService(newProduto);
  res.status(201).send(createdProduto);
};

const updateProdutoController = async (req, res) => {
  const idParam = req.params.id;
  const imputProduto = req.body;

  const updatedProduto = await produtosService.updateProdutoService( idParam, imputProduto);
  res.send(updatedProduto);
};

const deleteProdutoController = async (req, res) => {
  const idParam = req.params.id;

  const deleteProduto = await produtosService.deleteProdutoService(idParam);
  res.send(`O produto ${deleteProduto.nome} foi excluido com sucesso!`);
};

module.exports = {
  findAllProdutosController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
