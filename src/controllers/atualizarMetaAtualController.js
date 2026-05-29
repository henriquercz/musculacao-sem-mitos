var atualizarMetaAtualModel = require("../models/atualizarMetaAtualModel");

function atualizarMetaAtual(req, res) {

    var pesoNovo = req.body.novoPesoMetaServer;
    var dataNova = req.body.novaDataMetaServer;
    var idUsuario = req.body.idUsuario;

    if (pesoNovo == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else {
        
        atualizarMetaAtualModel.atualizarMetaAtual(pesoNovo, dataNova, idUsuario)
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
    atualizarMetaAtual 
}