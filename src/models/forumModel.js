var database = require("../database/config");

function listar() {
    console.log("ACESSEI O publicacao  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.titulo,
            p.conteudo,
            p.fkUsuario,
            u.idUser AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM publicacao as p
            INNER JOIN usuario u
                ON p.fkUsuario = u.idUser;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarConteudo(texto) {
    console.log("ACESSEI O publicacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarConteudo()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.titulo,
            p.conteudo,
            p.fkUsuario,
            u.idUser AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM publicacao as p
            INNER JOIN usuario u
                ON p.fkUsuario = u.idUser
        WHERE p.conteudo LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O publicacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.titulo,
            p.conteudo,
            p.fkUsuario,
            u.idUser AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM publicacao as p
            INNER JOIN usuario u
                ON p.fkUsuario = u.idUser
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, conteudo, idUsuario) {
    console.log("ACESSEI O publicacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, conteudo, idUsuario);
    var instrucaoSql = `
        INSERT INTO publicacao (titulo, conteudo, dtPublicacao, fkUsuario) VALUES ('${titulo}', '${conteudo}', default, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoConteudo, idPublicacao) {
    console.log("ACESSEI O publicacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoConteudo, idPublicacao);
    var instrucaoSql = `
        UPDATE publicacao SET conteudo = '${novoConteudo}' WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idPublicacao) {
    console.log("ACESSEI O publicacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPublicacao);
    var instrucaoSql = `
        DELETE FROM publicacao WHERE id = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarConteudo,
    publicar,
    editar,
    deletar
}
