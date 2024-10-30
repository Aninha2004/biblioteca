const express = require('express');
const EmprestimosController = require('../controllers/emprestimosController');
const router = express.Router();

router.post('/emprestimos', EmprestimosController.registrar);
router.get('/emprestimos', EmprestimosController.listar);

module.exports = router;
