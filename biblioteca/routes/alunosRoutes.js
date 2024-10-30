const express = require('express');
const AlunosController = require('../controllers/alunosController');
const router = express.Router();

router.post('/alunos', AlunosController.cadastrar);
router.get('/alunos', AlunosController.listar);

module.exports = router;
