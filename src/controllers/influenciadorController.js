/**
 * Controller responsável por intermediar as ações da entidade influenciadores e favoritos.
 * Autor: Capitão Henrique / Assistente Antigravity
 * Data: 2026-06-03
 * Versão: 1.1
 */

var influenciadorModel = require("../models/influenciadorModel");

/**
 * Trata a requisição de listagem de influenciadores para um usuário específico.
 * @param {object} req - Objeto de requisição do Express contendo idUsuario em params.
 * @param {object} res - Objeto de resposta do Express.
 */
function listarInfluenciadores(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else {
        influenciadorModel.listarInfluenciadores(idUsuario).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao listar influenciadores.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

/**
 * Registra o favoritismo de um influenciador pelo usuário.
 * @param {object} req - Objeto contendo idUsuario e idInfluenciador no corpo da requisição.
 * @param {object} res - Objeto de resposta do Express.
 */
function favoritar(req, res) {
    var idUsuario = req.body.idUsuario;
    var idInfluenciador = req.body.idInfluenciador;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (idInfluenciador == undefined) {
        res.status(400).send("O id do influenciador está indefinido!");
    } else {
        influenciadorModel.favoritar(idUsuario, idInfluenciador).then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao favoritar influenciador.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

/**
 * Remove o registro de favoritismo de um influenciador pelo usuário.
 * @param {object} req - Objeto contendo idUsuario e idInfluenciador no corpo da requisição.
 * @param {object} res - Objeto de resposta do Express.
 */
function desfavoritar(req, res) {
    var idUsuario = req.body.idUsuario;
    var idInfluenciador = req.body.idInfluenciador;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (idInfluenciador == undefined) {
        res.status(400).send("O id do influenciador está indefinido!");
    } else {
        influenciadorModel.desfavoritar(idUsuario, idInfluenciador).then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao desfavoritar influenciador.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    listarInfluenciadores,
    favoritar,
    desfavoritar
};