var express = require("express");
var router = express.Router();

var ultimoPesoController = require("../controllers/ultimoPesoController");

router.get("/buscarUltimoPeso/:idUsuario", function (req, res) {
    ultimoPesoController.buscarUltimoPeso(req, res);
});

router.get("/buscarMetaPeso/:idUsuario", function (req, res) {
    ultimoPesoController.buscarMetaPeso(req, res);
});

router.get("/buscarUltimosRegistrosPeso/:idUsuario", function (req, res) {
    ultimoPesoController.buscarUltimosRegistrosPeso(req, res);
});

router.post("/registrarConsumoAgua", function (req, res) {
    ultimoPesoController.registrarConsumoAgua(req, res);
});

router.get("/buscarUltimoRegistroAgua/:idUsuario", function (req, res) {
    ultimoPesoController.buscarUltimoRegistroAgua(req, res);
});

module.exports = router;