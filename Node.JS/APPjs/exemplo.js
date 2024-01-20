const pool = require('./db.js');

async function consultarUsuarios() {
  try {
    const [rows, fields] = await pool.execute('SELECT * FROM usuarios');
    console.log('Usuários:', rows);
  } catch (error) {
    console.error('Erro ao consultar usuários:', error);
  } finally {
    // Lembre-se de liberar a conexão de volta para o pool quando terminar
    pool.end();
  }
}

consultarUsuarios();
