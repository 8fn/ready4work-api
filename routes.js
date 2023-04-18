const express = require('express');
const router = express.Router();

const PropostaController = require('./controllers/PropostaController');

router.get('/propostas', PropostaController.buscarTodos);
router.get('/proposta/:id', PropostaController.buscarUm);
router.post('/proposta', PropostaController.inserir);
router.put('/proposta/:id', PropostaController.alterar);
router.delete('/proposta/:id', PropostaController.excluir);

module.exports = router;