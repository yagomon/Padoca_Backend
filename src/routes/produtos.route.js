const router = require('express').Router();
const produtosController = require('../controllers/produtos.controller');
const { validId, validObjectBody } = require('../middlewares/produtos.middleware')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/produtos', produtosController.findAllProdutosController);

router.get('/:id', validId, produtosController.findProdutoByIdController);

router.post('/create', validObjectBody, produtosController.createProdutoController);

router.put('/update/:id', validId, validObjectBody, produtosController.updateProdutoController);

router.delete('/delete/:id', validId, produtosController.deleteProdutoController);


module.exports = router;
