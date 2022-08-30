const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  next();
}

const validObjectBody = (req, res, next) => {
  const objectBoby= req.body;
  if ( !objectBoby || !objectBoby.nome || !objectBoby.ingredientes || !objectBoby.foto || !objectBoby.preco) {
    return res
      .status(400)
      .send({
        message: 'Você não preencheu todos os dados para adicionar um novo produto. Favor preencher todos os campos!',
      });
  }
  next()
}  

module.exports = {
  validId,
  validObjectBody,
};
