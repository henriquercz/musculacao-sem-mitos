/**
 * Definição de rotas para recursos de influenciadores e favoritos.
 * Autor: Capitão Henrique / Assistente Antigravity
 * Data: 2026-06-03
 * Versão: 1.1
 */

var express = require("express");
var router = express.Router();

var influenciadorController = require("../controllers/influenciadorController");

// Rota GET para listar influenciadores vinculando se o usuário específico favoritou.
router.get("/listarInfluenciadores/:idUsuario", function (req, res) {
    influenciadorController.listarInfluenciadores(req, res);
});

// Rota POST para registrar que um usuário favoritou um influenciador.
router.post("/favoritar", function (req, res) {
    influenciadorController.favoritar(req, res);
});

// Rota POST para deletar o registro de favorito de um influenciador.
router.post("/desfavoritar", function (req, res) {
    influenciadorController.desfavoritar(req, res);
});

module.exports = router;