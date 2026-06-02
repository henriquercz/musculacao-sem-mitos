var influenciadorModel = require("../models/influenciadorModel");

function listarInfluenciadores(req, res) {

    //var idUsuario = req.params.idUsuario;

    influenciadorModel.listarInfluenciadores().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao listar influenciadores.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarInfluenciadores
}