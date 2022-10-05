const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'dev',
    password: 'dev',
    database: 'test'
});

pgclient.connect();

// const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO asset_type(type_name) VALUES($1) RETURNING *'
const values = ['Test']

// pgclient.query(table, (err, res) => {
//     if (err) throw err
// });

pgclient.query(text, values, (err, res) => {
    if (err) throw err
});

pgclient.query('SELECT * FROM asset_type', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    pgclient.end()
});