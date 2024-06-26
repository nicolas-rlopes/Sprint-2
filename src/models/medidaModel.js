var database = require("../database/config");

function buscarUltimasMedidas(idSensor) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
    DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fkSensor = 1
    ORDER BY idMedida DESC 
   `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2(idSensor) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
    DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fkSensor = 2
    ORDER BY idMedida DESC 
   `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas3(idSensor) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
    DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fkSensor = 3
    ORDER BY idMedida DESC 
   `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
        DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fkSensor = ${idSensor}
    ORDER BY idMedida DESC
    LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltima(idSensor) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
        DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fkSensor = ${idSensor}
    ORDER BY idMedida DESC
    LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoGeladeira(idGeladeira) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
        DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
        FROM medida
        WHERE fkSensor = '${idGeladeira}' order by idMedida desc
        limit 7`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidadeGeladeiras() {
    var instrucaoSql = `select * from geladeira;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal3(idSensor) {
    var instrucaoSql = `SELECT 
        temperatura, 
        dtHora as momento,
        DATE_FORMAT(dtHora, '%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fkSensor = 3
    ORDER BY idMedida DESC
    LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarAlertas(email) {
    var instrucaoSql = `
SELECT temperatura, DATE_FORMAT(dtHora, '%H:%i:%s') as momentoRegistro FROM usuario u join empresa e on u.fkEmpresa = e.idEmpresa join geladeira g on e.idEmpresa = g.fkEmpresa join sensor s on g.idGeladeira = s.fkGeladeira join medida m on s.idSensor = m.fkSensor where u.email = '${email}' and (temperatura >= 9 or temperatura <= 1);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas2,
    buscarUltimasMedidas3,
    buscarMedidasEmTempoReal,
    buscarUltima,
    buscarMedidasEmTempoReal3,
    pegarAlertas,
    graficoGeladeira,
    quantidadeGeladeiras
};
