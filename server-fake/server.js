const express = require('express');
const Cors = require('cors');
const app = express();
const port = 8000;




// Configuração do CORS
const cors = Cors({
    origin: '*', // Substitua pelo domínio do seu aplicativo React, ou '*' para permitir qualquer origem
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
});

app.use(cors);

// Rota GET genérica para retornar um JSON
app.get('/api', (req, res) => {
    const data = [
        {
            "userId": 1,
            "id": 1,
            "title": "Estudar React",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "Estudar States",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "Estudar Props",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "Estudar react-router-dom",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "Estudar styled components e variant",
            "completed": false
        }
    ];

    res.json(data);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});