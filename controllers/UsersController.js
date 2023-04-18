const UsersService = require('../services/UsersService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let users = await UsersService.buscarTodos();

        for(let i in users){
            json.result.push({
                id: users[i].id,
                name: users[i].name,
                role: users[i].role,
                email: users[i].email
            });
        }

        res.json(json);
    },
}