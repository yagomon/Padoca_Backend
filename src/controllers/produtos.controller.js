const produtosService = require('../services/produtos.service');
const mongoose = require('mongoose');

const findAllProdutosController = async (req, res) => {
  const produtos = await produtosService.findAllProdutosService();
  res.send(produtos);
};

const findProdutoByIdController = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const produto = await produtosService.findProdutoByIdService(id);

  if (!produto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }

  res.send(produto);
};

const createProdutoController = async (req, res) => {
  const imputProduto = req.body;
  if (
    !imputProduto ||
    !imputProduto.nome ||
    !imputProduto.ingredientes ||
    !imputProduto.foto ||
    !imputProduto.preco
  ) {
    return res.status(400).send({ message: 'Você não preencheu todos os dados para adicionar um novo produto. Favor preencher todos os campos!'});
  }

  const newProduto = await produtosService.createProdutoService(imputProduto);
  res.status(201).send(newProduto);
};

const updateProdutoController = async (req, res) => {
  const id = req.params.id;
  const updateProduto = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }

  if (
    !updateProduto ||
    !updateProduto.nome ||
    !updateProduto.ingredientes ||
    !updateProduto.foto ||
    !updateProduto.preco
  ) {
    return res.status(400).send({message: 'Você não informou todos os dados para editar o produto!'});
  }

  const produtoUpdated = await produtosService.updateProdutoService( id, updateProduto);
  res.send(produtoUpdated);
};

const deleteProdutoController = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Id inválido." })
  }

  const produtosDeleted = await produtosService.deleteProdutoService(id);
  res.status(200).send(produtosDeleted);
};

module.exports = {
  findAllProdutosController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
