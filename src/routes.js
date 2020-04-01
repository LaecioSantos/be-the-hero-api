const express = require('express'); 
const OngController = require('./controllers/OngController'); 

const routes = express.Router(); 

//Test
routes.get('/', (request, response)=> {
    console.log(request.query);   // query params 
    return response.json({
        evento: 'Semana Omnistack', 
        aluno: 'Laécio Lima dos Santos'
    }); 
});

routes.get('/user/:id', (request, response)=> {
    console.log(request.params);  // route params
    return response.json({
        evento: 'Semana Omnistack', 
        aluno: 'Laécio Lima dos Santos'
    }); 
}); 

routes.post('/user', (request, response) => {
    console.log(request.body); 
    return response.json({
        evento: 'Semana Omnistack - Endpoint Post chamado', 
        aluno: 'Laécio Lima dos Santos'
    }); 
})

routes.post('/ongs',  OngController.create); 

routes.get('/ongs', OngController.index); 

module.exports = routes; 