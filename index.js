//carregar a biblioteca do express
var express = require('express');
//incializando o express
var app = express();

//endpoints ou endereços da web
app.get('/', function (req, res) {
  res.send('Hello World!');
});


//criar o novo endpoint
app.get('/nomecliente', function(req, res){
    let nome = {
        "Thiago" : "Xavier"
    }
    res.json(nome);
});

//a porta que será exposta
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});