const bancodados = require('../bd/connection')

module.exports={
    async find_user_by_email(email){
        const result_user_query = await bancodados('usuario').select("*").where({email})
        return result_user_query[0] || false
    },

    async register_an_user(user_datas, image){
        const verify_existing_user = await this.find_user_by_email(user_datas.email)
        if(verify_existing_user) return 'existing user'
        const ID_imagem = image && await this.save_image(image)
        await bancodados('usuario').insert({...user_datas, ID_imagem})
        const result_user_datas = await this.find_user_by_email(user_datas.email)

        return result_user_datas;
    },
    async login(user_datas){
        const {email} = await this.find_user_by_email(user_datas.email)
        const filter_by_password = await bancodados('usuario').select("*").where({email, senha: user_datas.senha})
        return filter_by_password || false
    },
    async find_user_by_id(user_id){
        const user_datas = await bancodados('usuario').select('email', 'nome', 'ID_imagem', 'CEP').where({ID_usuario: user_id})
        const user_img = await bancodados('imagem').select('nome', 'key', 'tamanho')
                                                    .where({ID_imagem: user_datas[0].ID_imagem})
        user_datas[0].ID_imagem = undefined
        user_datas[0].img = user_img[0]
        return user_datas[0]
    },
    async save_image({originalname: nome, filename: key, size: tamanho}){
        await bancodados('imagem').insert({nome, key, tamanho, created_at: Date.now()})
        const ID_image = await bancodados('imagem').max('ID_imagem', {as: 'ID_image'})
        return ID_image[0].ID_image
    },
    async update_user_datas(user_id, user_datas){
        await bancodados('usuario').update({...user_datas}).where({ID_usuario: user_id})
        const result_user_datas = await this.find_user_by_id(user_id)
        return result_user_datas
    },
    async delete_user(user_id){
        await bancodados('usuario').delete().where({ID_usuario: user_id})
    }
}