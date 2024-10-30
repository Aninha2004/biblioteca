const express = require('express');
const LivrosController = require('../controllers/livrosController');
const router = express.Router();

router.post('/livros', LivrosController.cadastrar);
router.get('/livros', LivrosController.listar);

module.exports = router;
