const router = require('express').Router();
const produtosController = require('../controllers/produtos.controller');


router.get('/', produtosController.findAllProdutosController);

router.get('/:id', produtosController.findProdutoByIdController);

router.post('/create', produtosController.createProdutoController);

router.put('/update/:id', produtosController.updateProdutoController);

router.delete('/delete/:id', produtosController.deleteProdutoController);


module.exports = router;
