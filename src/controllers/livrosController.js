const express = require('express');
const router = express.Router();
const listarLivros = require('../useCases/listarLivros');
const comprarLivro = require('../useCases/comprarLivro');
const cadastrarLivro = require('../useCases/cadastrarLivro');
const Livro = require('../entities/Livro');

// Listar todos os livros
router.get('/livros', async (req, res) => {
    try {
        const livros = await listarLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Comprar um livro
router.post('/comprar', async (req, res) => {
    const { titulo } = req.body;
    try {
        const mensagem = await comprarLivro(titulo);
        res.send(mensagem);
    } catch (error) {
        res.status(400).json({ error });
    }
});

// Cadastrar um novo livro
router.post('/cadastrar', async (req, res) => {
    const { titulo, autor, genero, imagem } = req.body;
    const novoLivro = new Livro(titulo, autor, genero, imagem);
    try {
        const mensagem = await cadastrarLivro(novoLivro);
        res.send(mensagem);
    } catch (error) {
        res.status(400).json({ error });
    }
});

module.exports = router;
