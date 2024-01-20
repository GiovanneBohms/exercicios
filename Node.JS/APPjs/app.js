// app.js
const connection = require('./db');

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  // Realizar operações no banco de dados aqui
  connection.query('SELECT * FROM sua_tabela', (err, results) => {
    if (err) {
      console.error('Erro ao realizar a consulta:', err);
    } else {
      console.log('Resultados da consulta:', results);
    }

    // Fechar a conexão ao final
    connection.end();
  });
});
