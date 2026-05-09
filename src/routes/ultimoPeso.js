var express = require("express");
var router = express.Router();

var ultimoPesoController = require("../controllers/ultimoPesoController");

router.get("/buscarUltimoPeso/:idUsuario", function (req, res) {
    ultimoPesoController.buscarUltimoPeso(req, res);
});

router.get("/buscarMetaPeso/:idUsuario", function (req, res) {
    ultimoPesoController.buscarMetaPeso(req, res);
});

module.exports = router;