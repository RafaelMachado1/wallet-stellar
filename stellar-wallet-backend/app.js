/*
Arquivo principal

app.js: Este é o arquivo principal da sua aplicação. Ele é responsável por configurar o servidor, as rotas, os middlewares, etc.
*/

// app.js

import stellarService from './services/stellarService.js';

// ...

const keys = stellarService.generateKeys();
console.log(keys); // Deve exibir as chaves geradas no console