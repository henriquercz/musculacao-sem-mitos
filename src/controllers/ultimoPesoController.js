var ultimoPesoModel = require("../models/ultimoPesoModel");

function buscarUltimoPeso(req, res) {

    var idUsuario = req.params.idUsuario;

    ultimoPesoModel.buscarUltimoPeso(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMetaPeso(req, res) {
    var idUsuario = req.params.idUsuario;

    ultimoPesoModel.buscarMetaPeso(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as metas do user.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

function buscarUltimosRegistrosPeso(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    ultimoPesoModel.buscarUltimosRegistrosPeso(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos pesos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function registrarConsumoAgua(req, res) {
    var idUsuario = req.body.idUsuario;
    var quantidade = req.body.quantidade;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (quantidade == undefined) {
        res.status(400).send("A quantidade de água está indefinida!");
    } else {
        ultimoPesoModel.registrarConsumoAgua(quantidade, idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao registrar consumo de água: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarUltimoRegistroAgua(req, res) {
    var idUsuario = req.params.idUsuario;

    ultimoPesoModel.buscarUltimoRegistroAgua(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar última quantidade de água: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarUltimoPeso,
    buscarMetaPeso,
    buscarUltimosRegistrosPeso,
    registrarConsumoAgua,
    buscarUltimoRegistroAgua
}