const Emprestimo = require('../models/emprestimo');

let emprestimos = [];

class EmprestimosController {
    static registrar(req, res) {
        const { id, alunoId, livroId, dataEmprestimo, dataDevolucao } = req.body;
        const emprestimo = new Emprestimo(id, alunoId, livroId, dataEmprestimo, dataDevolucao);
        emprestimos.push(emprestimo);
        res.status(201).send('Empréstimo registrado com sucesso!');
    }

    static listar(req, res) {
        res.json(emprestimos);
    }
}

module.exports = EmprestimosController;
