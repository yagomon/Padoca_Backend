const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true},
  ingredientes: { type: String, required: true},
  foto: { type: String, required: true},
  preco: { type: Number, required: true},
});

const Produto = mongoose.model('produtos', ProdutoSchema);

module.exports = Produto;
