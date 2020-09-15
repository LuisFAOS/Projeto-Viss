const bancodados = require('../bd/connection')

module.exports={
    async find_user_by_email(email){
        const result_user_query = await bancodados('usuario').select("*").where({email})
        return result_user_query[0] || false
    },

    async register_an_user(user_datas){
        await bancodados('usuario').insert({...user_datas})
        const result_user_datas = await this.find_user_by_email(user_datas.email)
        return result_user_datas;
    },
    async login(user_datas){
        const {email} = await this.find_user_by_email(user_datas.email)
        const filter_by_password = await bancodados('usuario').select("*").where({email, senha: user_datas.senha})
        return filter_by_password || false
    }
}