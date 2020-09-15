const jwt = require('../setup/jwt_files/jwt')

module.exports= {
    async user_auth(req, res, next){
        try {
            const token = req.headers['Authorization'] || req.headers['authorization'] || req.headers['x-access-token'];
            if (token !== undefined){
                jwt.authorize(token, res, next)
            } 
            else res.status(401).send('acesso restrito para usuários') 
        } catch (e) {
            res.status(400).send('token expirado ou inválido')
        }
        
    }
}