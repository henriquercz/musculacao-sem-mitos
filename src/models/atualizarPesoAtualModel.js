var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

function atualizarPesoAtual(pesoNovo, idUser) {
    console.log('acessando o model usuario para registrar peso')

    var instrucaoSql = `
        INSERT INTO registro_peso (peso, dataRegistro, fkUsuario) VALUES (${pesoNovo}, now(), ${idUser})`

    console.log('InstrucaoSql: ', instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    atualizarPesoAtual
};