const produtosService = require('../services/produtos.service');

const findAllProdutosController = (req, res) => {
  const produtos = produtosService.findAllProdutosService();
  res.send(produtos);
};

const findProdutoByIdController = (req, res) => {
  const id = +req.params.id;
  if (!id) {
    return res.status(400).send({ message: 'Id não informado!' });
  }

  const produto = produtosService.findProdutoByIdService(id);
  if (!produto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }

  res.send(produto);
};

const createProdutoController = (req, res) => {
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

  const newProduto = produtosService.createProdutoService(imputProduto);
  res.status(201).send(newProduto);
};

const updateProdutoController = (req, res) => {
  const id = +req.params.id;
  const updateProduto = req.body;

  if (!id) {
    return res.status(404).send({ message: 'Produto não enontrado!' });
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

  const produtoUpdated = produtosService.updateProdutoService(
    id,
    updateProduto,
  );
  res.send(produtoUpdated);
};

const deleteProdutoController = (req, res) => {
  const id = +req.params.id;
  if (!id) {
    return res.status(404).send({ message: "Id inválido." })
  }

  const produtosDeleted = produtosService.deleteProdutoService(id);
  
  if (produtosDeleted.error) {
    res.status(404).send(produtosDeleted.error)
  } else {
    res.send(`O produto ${produtosDeleted[0].nome} foi excluído com sucesso!`);
  }

};

module.exports = {
  findAllProdutosController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
