const Yup = require('yup')

module.exports = {
    user_schema: Yup.object().shape({
        email: Yup.string()
                    .email('O formato do email não é válido!')
                    .min(8, 'Email muito curto!')
                    .max(100, 'Email muito longo!')
                    .required('Email é obrigatório!'),
                
        nome: Yup.string()
                    .min(4, 'Nome muito curto!')
                    .max(100, 'Nome muito longo!')
                    .required('Nome é obrigatório!'),

        senha: Yup.string()
                    .min(6, 'Senha muito curta!')
                    .max(100, 'Senha muito longa!')
                    .required('Senha é obrigatória!'),
                    
    }),

    BO_schema: Yup.object().shape({
        data_ocorrido: Yup.date()
                            .min(new Date(new Date().getFullYear(), new Date().getMonth()-10, 1)) // 10 meses atrás
                            .max(new Date())
                            .required('Data do ocorrido é obrigatória!')
    })
}