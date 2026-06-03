/**
 * Módulo de conexão com o banco de dados para a entidade de influenciadores e favoritos.
 * Autor: Capitão Henrique / Assistente Antigravity
 * Data: 2026-06-03
 * Versão: 1.1
 */

var database = require("../database/config");

/**
 * Busca a lista de todos os influenciadores associando o status de favorito para o usuário logado.
 * @param {number} idUsuario - ID do usuário cujos favoritos serão avaliados.
 * @returns {Promise} Promessa contendo o resultado da query SQL.
 */
function listarInfluenciadores(idUsuario) {
    var instrucaoSql = `
        SELECT 
            i.idInfluenciador, 
            i.nomeInfluenciador, 
            i.social, 
            i.imagem,
            CASE WHEN f.fkUsuario IS NOT NULL THEN 1 ELSE 0 END AS estaFavoritado
        FROM influenciadores i
        LEFT JOIN favorito_influenciador f 
            ON i.idInfluenciador = f.fkInfluenciador AND f.fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/**
 * Cria um registro de favoritismo relacionando usuário e influenciador (N:N).
 * @param {number} idUsuario - ID do usuário que está favoritando.
 * @param {number} idInfluenciador - ID do influenciador a ser favoritado.
 * @returns {Promise} Promessa contendo o resultado da inserção SQL.
 */
function favoritar(idUsuario, idInfluenciador) {
    var instrucaoSql = `
        INSERT INTO favorito_influenciador (fkUsuario, fkInfluenciador) 
        VALUES (${idUsuario}, ${idInfluenciador});
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/**
 * Exclui o registro de favoritismo entre usuário e influenciador.
 * @param {number} idUsuario - ID do usuário que está desfavoritando.
 * @param {number} idInfluenciador - ID do influenciador a ser desfavoritado.
 * @returns {Promise} Promessa contendo o resultado da deleção SQL.
 */
function desfavoritar(idUsuario, idInfluenciador) {
    var instrucaoSql = `
        DELETE FROM favorito_influenciador 
        WHERE fkUsuario = ${idUsuario} AND fkInfluenciador = ${idInfluenciador};
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarInfluenciadores,
    favoritar,
    desfavoritar
};
