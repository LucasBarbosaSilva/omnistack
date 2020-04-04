const conection = require('../database/connection');

module.exports = {
    async create(request, response ){
        
        const {id} = request.body;

        const ong = await conection('ongs')
            .where('id', id)
            .select('nome')
            .first();
        
        if(!ong){
            return response.status(400).json({erro: 'No ONG found with thhis ID'});
        }

        return response.json(ong);
    }
}