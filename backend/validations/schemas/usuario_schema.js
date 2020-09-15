const Yup = require('yup')

module.exports = {
    register_user_schema: Yup.object().shape({
        email: Yup.string()
                    .email('O formato do email não é válido!')
                    .min(8, 'email muito curto!')
                    .max(100, 'email muito longo!')
                    .required('email é obrigatório!'),
                
        nome: Yup.string()
                    .min(4, 'nome muito curto!')
                    .max(100, 'nome muito longo!')
                    .required('nome é obrigatório!'),

        senha: Yup.string()
                    .min(6, 'senha muito curta!')
                    .max(100, 'senha muito longa!')
                    .required('senha é obrigatória!'),
                    
    }),
}