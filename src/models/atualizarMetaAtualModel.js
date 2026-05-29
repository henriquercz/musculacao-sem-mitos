var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

function atualizarMetaAtual(pesoNovo, dataNova, idUser) {
    console.log('acessando o model usuario para registrar peso')

    var instrucaoSql = `
        UPDATE usuario SET dataDesejada = '${dataNova}', pesoDesejado = ${pesoNovo} WHERE idUser = ${idUser};`
    console.log('InstrucaoSql: ', instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    atualizarMetaAtual
};