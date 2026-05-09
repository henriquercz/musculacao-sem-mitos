var database = require("../database/config");

function buscarUltimoPeso(idUsuario) {

    var instrucaoSql = `select peso, DATE_FORMAT(dataRegistro, '%d/%m/%Y') as dataRegistro 
    from registro_peso where fkUsuario = ${idUsuario} 
    order by idRegistro desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetaPeso(idUsuario) {
    // var instrucaoSql = `select pesoDesejado, DATE_FORMAT(dataDesejada, '%d, %m, %Y') as dataDesejada
    //from usuario where idUser = ${idUsuario};`

    var instrucaoSql = `select p.peso as pesoAtual, u.pesoDesejado as pesoDesejado, DATEDIFF(u.dataDesejada, now()) as diasParaMeta
	from usuario as u join registro_peso as p
		on u.idUser = p.fkUsuario
        where u.idUser = ${idUsuario}
        order by p.idRegistro desc limit 1;`;

    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimoPeso,
    buscarMetaPeso
}
