var database = require("../database/config");

function listarInfluenciadores() {

    var instrucaoSql = `select imagem, nomeInfluenciador, social
    from influenciadores;`;

    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarInfluenciadores
}
