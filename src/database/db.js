const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db");

//operações no banco
 db.serialize(() => {


  //criar tabela
  /* db.run(`
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
  `)*/

  //deletar um dado da tabela
   db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    if(err){
      console.log(err);
    }
  
    console.log('Registro deletado com sucesso!');
  }); 
})

module.exports = db;