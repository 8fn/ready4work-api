const express = require('express');
const router = express.Router();

const PropostaController = require('./controllers/PropostaController');

router.get('/propostas', PropostaController.buscarTodos);

module.exports = router;