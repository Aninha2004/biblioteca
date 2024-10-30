const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuração do body parser
app.use(bodyParser.json());

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para as páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cadastro_alunos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastro_alunos.html'));
});

app.get('/cadastro_livros.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastro_livros.html'));
});

app.get('/emprestimos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'emprestimos.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
