const Aluno = require('../models/aluno');

let alunos = [];  // Esta seria a "base de dados" temporária

class AlunosController {
    static cadastrar(req, res) {
        const { id, nome, matricula, curso } = req.body;
        const aluno = new Aluno(id, nome, matricula, curso);
        alunos.push(aluno);
        res.status(201).send('Aluno cadastrado com sucesso!');
    }

    static listar(req, res) {
        res.json(alunos);
    }
}

module.exports = AlunosController;
