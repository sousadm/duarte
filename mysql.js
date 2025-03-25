const mysql = require('mysql2/promise'); // Versão Promise (recomendada)

async function connectToMySQL() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',      // Endereço do servidor MySQL
            user: 'root',          // Usuário do banco
            password: 'admin', // Senha do banco
            database: 'duarte', // Nome do banco de dados
        });

        console.log('Conectado ao MySQL!');
        
        // Exemplo de consulta
        const [rows] = await connection.execute('SELECT * FROM duarte.municipio');
        console.log(rows);

        await connection.end(); // Fecha a conexão
    } catch (err) {
        console.error('Erro ao conectar:', err);
    }
}

connectToMySQL();