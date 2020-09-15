const JWT = require('jsonwebtoken')
const JWT_KEY = require('./secret')

module.exports = {
    async token_generator(user_datas) {
        return JWT.sign({
            user:{
                id: user_datas.ID_usuario,
                name: user_datas.nome,
            },
            auth:true
        }, 
        JWT_KEY, 
        {expiresIn:'2d'})},

    async return_token_data(token) {
        const data = await JWT.verify(token, JWT_KEY)
        return data
    },

    authorize: (token, res, next) => JWT.verify(token, JWT_KEY, err=> {
        if(err) res.status(401).send('invalid token')
        else next()
    }) 
}
