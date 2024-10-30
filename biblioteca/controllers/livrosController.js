const Livro = require('../models/livro');

let livros = [];

class LivrosController {
    static cadastrar(req, res) {
        const { id, titulo, autor, ano, categoria } = req.body;
        const livro = new Livro(id, titulo, autor, ano, categoria);
        livros.push(livro);
        res.status(201).send('Livro cadastrado com sucesso!');
    }

    static listar(req, res) {
        res.json(livros);
    }
}

module.exports = LivrosController;
