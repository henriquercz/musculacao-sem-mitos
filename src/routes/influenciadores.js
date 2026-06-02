var express = require("express");
var router = express.Router();

var influenciadorController = require("../controllers/influenciadorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarInfluenciadores", function (req, res) {
    influenciadorController.listarInfluenciadores(req, res);
});

module.exports = router;