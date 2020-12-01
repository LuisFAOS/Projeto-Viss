const cep_promise = require('cep-promise')
const {user_schema,BO_schema} = require('./schemas/schemas')
const axios = require('axios')

module.exports = {
    async user_validation(user_datas){
        try {
            await user_schema.validate({...user_datas})
            await cep_promise(user_datas.CEP)
        } catch (err) {
            return err.message
        }
    },

    async BO_validation(BO_datas){
        try {
            const regex= /[0-9]/
            await BO_schema.validate({...BO_datas})
            
            if(regex.test(BO_datas.endereco_cep)){ 
                const cep = await cep_promise(BO_datas.endereco_cep)
                return [{...BO_datas},{ bairro: cep.neighborhood}]
            }
            else{ 
                const locationDatas = BO_datas.endereco_cep.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(',')
                if(locationDatas.length != 3) throw new Error('Endereço com o formato inválido')     

                const DataLocation = await axios
                    .get(`https://viacep.com.br/ws/${locationDatas[0].trim()}/${locationDatas[1].trim()}/${locationDatas[2].trim()}/json/`)
                if(DataLocation == []) throw new Error('Endereço inválido!!')       

                return [{...BO_datas},{ bairro: DataLocation.data[0].bairro}]
            }
        } catch (err) {
            return err.message
        }
    }
}