var express = require("express");
var router = express.Router();

var atualizarMetaAtualController = require("../controllers/atualizarMetaAtualController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/atualizarMetaAtual", function (req, res) {
    atualizarMetaAtualController.atualizarMetaAtual(req, res);
})


module.exports = router;