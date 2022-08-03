const express = require('express');

const port = 3001;
const app = express();

app.use(express.json());

//Meu Banco
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

// Get All
app.get('/produtos', (req, res) => {
  res.send(produtos);
});

// Get By Id
app.get('/produtos/produto/:id', (req, res) => {
  const id= req.params.id;
  const chosenProduto= produtos.find((produto)=> produto.id == id)

  res.send(chosenProduto)
});




app.listen(port, () => {
  console.info(`Rodando em http://localhost:${port}`);
});
