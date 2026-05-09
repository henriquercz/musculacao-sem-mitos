var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUser, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, conheceMetodologia, objetivo, pesoDesejado, dataDesejada) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, conheceMetodologia, objetivo, pesoDesejado, dataDesejada);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, conheceMetodologia, objetivo, pesoDesejado, dataDesejada) VALUES ('${nome}', '${email}', '${senha}', '${conheceMetodologia}', '${objetivo}', ${pesoDesejado}, '${dataDesejada}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarPeso(pesoAtual, idUser) {
    console.log('acessando o model usuario para registrar peso')

    var instrucaoSql = `
        INSERT INTO registro_peso (peso, dataRegistro, fkUsuario) VALUES (${pesoAtual}, now(), ${idUser})`

    console.log('InstrucaoSql: ', instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    autenticar,
    cadastrar,
    registrarPeso
};