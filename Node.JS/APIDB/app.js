// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'node',
    port: 3306
})
    .then(async (connection) => {

        // const [results, fields] = await connection.query(
        //             `CREATE TABLE users (
        //                 id INT AUTO_INCREMENT NOT NULL,
        //                 name VARCHAR(255) NOT NULL,
        //                 birth_date DATE NOT NULL,
        //                 PRIMARY KEY (id)
        //               );`
        //         );
        try {
            await connection.query(
                `INSERT INTO users (name, birth_date) VALUES ('Matheus', '1994-09-28')`
            );

            const [results, fields] = await connection.query(
                'SELECT * FROM `users`'
            );

            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        } catch (err) {
            console.log(err);
        }

        connection.end()
    })

