const cep_promise = require('cep-promise')
const {register_user_schema} = require('./schemas/usuario_schema')

module.exports = {
    async register_an_user_validation(user_datas){
        try {
            await register_user_schema.validate({...user_datas})
            await cep_promise(user_datas.CEP)
        } catch (err) {
            return err.errors || err
        }
    }
}