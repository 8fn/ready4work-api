const express = require('express');
const router = express.Router();

const PropostaController = require('./controllers/PropostaController');
const UsersController = require('./controllers/UsersController');

router.get('/propostas', PropostaController.buscarTodos);
router.get('/users', UsersController.buscarTodos);

module.exports = router;