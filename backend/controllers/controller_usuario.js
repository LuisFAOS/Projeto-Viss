const user_models = require('../models/model_usuario')
const JWT = require('../setup/jwt_files/jwt')
const {register_an_user_validation,} = require('../validations/usuario_validacao')
const bcrypt = require('bcryptjs')

module.exports={
    async sing_up(req, res){
        try {
            const user_datas = req.body.user_datas || req.body
            const user_validation_result = await register_an_user_validation(user_datas)
            if(!user_validation_result){
                const passwordHash = await bcrypt.hash(user_datas.senha, 8)
                user_datas.senha = passwordHash
                const user_insert_result = await user_models.register_an_user(user_datas)
                if(user_insert_result === 'existing user') {
                    res.status(400).send(user_insert_result)
                    return
                }
                const token= await JWT.token_generator(user_insert_result)
                const {user, auth} = await JWT.return_token_data(token)
                res.status(200).send({user, auth, token})
            }else res.status(400).send(user_validation_result) 
        } catch (e) {
            res.status(500).send(`[erro em registro]: 
                ${e}`)
        }
    },
    async login(req, res){
        try{
            const {email, senha} = req.body.user_datas || req.body
            const database_user_datas = await user_models.find_user_by_email(email)
            if(!database_user_datas){ 
                res.status(400).send('email inválido')
                return
            }
            const verify_password = await bcrypt.compare(senha, database_user_datas.senha)

            if (!verify_password) res.status(401).send('senha inválida')
            
            else{
                const token= await JWT.token_generator(database_user_datas)
                const {user, auth} = await JWT.return_token_data(token)
                res.status(200).send({user, auth, token})
            }
        } catch (e) {
            res.status(500).send(`[erro ao logar-se]: 
                ${e}`)
        }
    },
    logout(req, res){
        res.status(200).send({})
    }
}

            