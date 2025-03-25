const { Client } = require('pg');

// Configurações de conexão
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sousa',
    password: 'r@@t',
    port: 5432, // Porta padrão do PostgreSQL
});

// Conectar ao banco de dados
client.connect()
    .then(() => {
        console.log('Conectado ao banco de dados PostgreSQL');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados', err);
    });

// Exemplo de consulta
client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Resultado da consulta:', res.rows[0]);
    client.end(); // Fechar a conexão
});