var atualizarPesoAtualModel = require("../models/atualizarPesoAtualModel");

function atualizarPesoAtual(req, res) {

    var pesoNovo = req.body.pesoNovoServer;
    var idUsuario = req.body.idUsuario;

    if (pesoNovo == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else {
        
        atualizarPesoAtualModel.atualizarPesoAtual(pesoNovo, idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    atualizarPesoAtual 
}