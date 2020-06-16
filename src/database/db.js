const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db");

//operações no banco
/* db.serialize(() => {


  //criar tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      adress TEXT,
      adress2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  //inserir dados na tabela
  const query = `
    INSERT INTO places (
      image,
      name,
      adress,
      adress2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "Papersider",
    "Augusto Franco, Farolândia",
    "Nº 222",
    "Sergipe",
    "Aracaju",
    "Papéis e Papelão"
  ];

  function afterInsertData(err) {
    if (err){
      return console.log(err)
    }

    console.log("Cadastrado com sucesso");
    console.log(this); // objeto que é retornado pelo run()
  }

  db.run(query, values, afterInsertData)

  

  //deletar um dado da tabela
  db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    if(err){
      console.log(err);
    }
  
    console.log('Registro deletado com sucesso!');
  });
}) */

module.exports = db;