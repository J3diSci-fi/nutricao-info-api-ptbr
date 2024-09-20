const express = require('express');
const alimentosController = require('../controllers/alimentosController');

const router = express.Router();

router.get('/', alimentosController.listarAlimentos);
router.get('/:nome', alimentosController.buscarAlimento);

module.exports = router;
