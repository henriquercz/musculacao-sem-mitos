var express = require("express");
var router = express.Router();

var atualizarPesoAtualController = require("../controllers/atualizarPesoAtualController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/atualizarPesoAtual", function (req, res) {
    atualizarPesoAtualController.atualizarPesoAtual(req, res);
})


module.exports = router;