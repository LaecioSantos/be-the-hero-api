const express = require('express'); //Importando modulo express para dentro da variável express 
const cors = require('cors')
const routes = require('./routes'); //necessário o ./ para indicar que não é uma biblioteca 

const app = express(); //Aplicacao

app.use(cors()); //em produção temos que setar qual domínio pode acessar a nossa aplicação 
app.use(express.json()); 
app.use(routes); 


/**
 * Rota - recurso 
 * 
 * Semântica REST 
 * 
 * GET - Buscar/listar uma informação do back-end
 * POST - Criar uma informação 
 * PUT - Alterar informação no backend 
 * DELETE - Deletar uma informação 
 * 
 * Tipos de parâmetros
 * Query params: parâmetros nomeados enviados após "?" (separados por &) (filtros, paginação). request.query 
 * Route params: parâmetros utilizados para identificar recuros (:) request.params
 * Request Body. request.body 
 * 
 * SQL
 * NoSQL
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table(`Users`).select(`*`).where() -> Aceitam qualquer banco SQL 
 * 
 */

app.listen(3333); 

