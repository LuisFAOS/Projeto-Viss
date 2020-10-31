const JWT = require('jsonwebtoken')

module.exports = {
    async token_generator(user_datas) {
        return JWT.sign({
            user:{
                id: user_datas.ID_usuario,
                name: user_datas.nome,
            },
            auth:true
        }, 
        process.env.REACT_APP_SECRET_KEY, 
        {expiresIn:'2d'})},

    async return_token_data(token) {
        const data = await JWT.verify(token, process.env.REACT_APP_SECRET_KEY)
        return data
    },

    authorize: (token, res, next) => JWT.verify(token, process.env.REACT_APP_SECRET_KEY, err=> {
        if(err) res.status(401).send('invalid token')
        else next()
    }) 
}
