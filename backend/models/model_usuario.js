const bancodados = require('../bd/connection')

module.exports={
    async find_user_by_email(email){
        const result_user_query = await bancodados('usuario').select("*").where({email})
        return result_user_query[0] || false
    },

    async register_an_user(user_datas){
        const verify_existing_user = await this.find_user_by_email(user_datas.email)
        if(verify_existing_user) return 'existing user'
        await bancodados('usuario').insert({...user_datas})
        const result_user_datas = await this.find_user_by_email(user_datas.email)
        return result_user_datas;
    },
    async login(user_datas){
        const {email} = await this.find_user_by_email(user_datas.email)
        const filter_by_password = await bancodados('usuario').select("*").where({email, senha: user_datas.senha})
        return filter_by_password || false
    },
    async find_user_by_id(user_id){
        const user_datas = await bancodados('usuario').select({email, nome, senha, CEP}).where({id: user_id})
        return user_datas
    },
    async update_user_datas(user_id){
         
    },
    async delete_user(user_id){
        await bancodados('usuario').delete().where({id: user_id})
    },
    async make_report(){
        
    }
}