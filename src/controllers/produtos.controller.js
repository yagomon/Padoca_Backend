const produtosService = require('../services/produtos.service');
const mongoose = require('mongoose');

const findAllProdutosController = async (req, res) => {
  const allProdutos = await produtosService.findAllProdutosService();
  res.send(allProdutos);
};

const findProdutoByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenProduto = await produtosService.findProdutoByIdService(idParam);

  if (!chosenProduto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }

  res.send(chosenProduto);
};

const createProdutoController = async (req, res) => {
  const newProduto = req.body;
  if (
    !newProduto ||
    !newProduto.nome ||
    !newProduto.ingredientes ||
    !newProduto.foto ||
    !newProduto.preco
  ) {
    return res
      .status(400)
      .send({
        message:
          'Você não preencheu todos os dados para adicionar um novo produto. Favor preencher todos os campos!',
      });
  }

  const createdProduto = await produtosService.createProdutoService(newProduto);
  res.status(201).send(createdProduto);
};

const updateProdutoController = async (req, res) => {
  const idParam = req.params.id;
  const imputProduto = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }

  if (
    !imputProduto ||
    !imputProduto.nome ||
    !imputProduto.ingredientes ||
    !imputProduto.foto ||
    !imputProduto.preco
  ) {
    return res
      .status(400)
      .send({
        message: 'Você não informou todos os dados para editar o produto!',
      });
  }

  const updatedProduto = await produtosService.updateProdutoService( idParam, imputProduto);
  res.send(updatedProduto);
};

const deleteProdutoController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Id inválido.' });
  }

  const deleteProdutos = await produtosService.deleteProdutoService(idParam);
  res.status(200).send(deleteProdutos);
};

module.exports = {
  findAllProdutosController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
