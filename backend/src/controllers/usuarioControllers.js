const connection = require('../database/conection')

module.exports = {
    /**Listagem de Ogs cadastradas */
    async create (request, response){
        const {id, name, email, celular, funcao} = request.body;
        


        await connection('usuario').insert({
                id,
                name,
                email,
                celular,
                funcao,
            })
        return response.json({Status: "Cadastrado com sucesso"});
        
    },

    async index (request, response ){
        const users = await connection('usuario').select('*');

        return response.json(users);


    }    
}