const express = require('express');
const server = express();

const db = require("./database/db");

//configuração da pasta pública
server.use(express.static("public"));

//utilizando template engine
const nunjuncks = require('nunjucks');
nunjuncks.configure('src/views', {
  express: server,
  noCache: true
})

server.get('/', (req, res) => {
  return res.render("index.html");
})

server.get('/create-point', (req, res) => {
  return res.render("create-point.html");
})

server.get('/search', (req, res) => {
  //consultar dados da tabela
  db.all(`SELECT * FROM places`, function(err, rows) {
    if (err){
      return console.log(err)
    }

    console.log(rows);

    return res.render("search-results.html", { places: rows });
  }) 
})

//ligar o servidor
server.listen(3000)