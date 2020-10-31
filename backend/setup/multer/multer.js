const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: '../../temp/user_imgs',
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './temp/user_imgs')
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(10, (err, hash)=>{
                if(err) cb(err)
                
                const fileName = `${hash.toString('hex')}-${file.originalname}`

                cb(null, fileName)
            })
        }
    }),
    limits: {
        fileSize: 1.5 * 1024 * 1024,
        files: 1
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ]

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Tipo de arquivo inválido! Aceitamos (jpeg, pjpeg e png)'))
        }    
        

    }
}