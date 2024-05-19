const mysql = require('mysql2/promise');

async function insertData() {
  // Configurações de conexão com o banco de dados
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'Raspagem Steam'
  });

  try {
    // Inserir dados na tabela Item
    await connection.query(`
      INSERT INTO \`Item\` (\`IDName\`, \`Name\`, \`IDGame\`) VALUES
      (1, 'Nome do Item 1', 'ID do Jogo 1'),
      (2, 'Nome do Item 2', 'ID do Jogo 2'),
      (3, 'Nome do Item 3', 'ID do Jogo 3')
    `);

    // Inserir dados na tabela Book
    await connection.query(`
      INSERT INTO \`Book\` (\`Volume\`, \`Price\`, \`Item_IDName\`) VALUES
      (1, 10.99, 1)
    `);
    await connection.query(`
      INSERT INTO \`Book\` (\`Volume\`, \`Price\`, \`Item_IDName\`) VALUES
      (2, 15.99, 2)
    `);
    await connection.query(`
      INSERT INTO \`Book\` (\`Volume\`, \`Price\`, \`Item_IDName\`) VALUES
      (3, 20.99, 3)
    `);

    // Inserir dados na tabela Vendas
    await connection.query(`
      INSERT INTO \`Vendas\` (\`Volume\`, \`Price\`, \`Item_IDName\`) VALUES
      (5, 50.99, 1)
    `);
    await connection.query(`
      INSERT INTO \`Vendas\` (\`Volume\`, \`Price\`, \`Item_IDName\`) VALUES
      (3, 30.99, 2)
    `);
    await connection.query(`
      INSERT INTO \`Vendas\` (\`Volume\`, \`Price\`, \`Item_IDName\`) VALUES
      (2, 25.99, 3)
    `);

    // Inserir dados na tabela Consult
    await connection.query(`
      INSERT INTO \`Consult\` (\`StartDate\`) VALUES
      ('2024-05-18 09:00:00'),
      ('2024-05-19 10:00:00'),
      ('2024-05-20 11:00:00')
    `);

    // Inserir dados na tabela Item_has_Consult
    await connection.query(`
      INSERT INTO \`Item_has_Consult\` (\`Item_IDName\`, \`Consult_IDConsult\`) VALUES
      (1, 1),
      (2, 2),
      (3, 3)
    `);

    console.log('Dados inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
  } finally {
    // Encerra a conexão com o banco de dados
    await connection.end();
  }
}

// Chama a função para inserir os dados
insertData();
