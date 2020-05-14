//carregar a biblioteca do express
var express = require('express');
const dbMysql = require('mysql');
//incializando o express
var app = express();



//Criar a conexão 
var db = dbMysql.createConnection(
  {
    host: "db4free.net",
    user: "automacaouninove",
    password: "uninove10",
    database: "lojacadastro"
  }
);

//Iniciar a conexão
db.connect(function (error) {
  if (error) throw error; //expor os erros que ocorrem na conexão
  console.log("Conectado com sucesso!");
});

//função para executar as queries
function executarQuery(sql, response) {
  db.query(sql, function (error, result, fields) {
    if (error)
      response.json(error);
    else
      response.json(result);
  });
}


//Retornar usuários
app.get('/usuarios', function (req, response) {
  const sql = "select * from usuarios";
  executarQuery(sql, response);
});


//endpoints ou endereços da web
app.get('/', function (req, res) {
  res.send('Hello World!');
});


//criar o novo endpoint
app.get('/nomecliente', function (req, res) {
  let nome = {
    "Thiago": "Xavier"
  }
  res.json(nome);
});

//a porta que será exposta
app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});