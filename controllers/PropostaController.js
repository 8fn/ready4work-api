const PropostaService = require('../services/PropostaService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let propostas = await PropostaService.buscarTodos();

        for(let i in propostas){
            json.result.push({
                id: propostas[i].id,
                proposta: propostas[i].proposta,
                estado: propostas[i].estado
            });
        }

        res.json(json);
    },
}