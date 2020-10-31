const express= require('express')
const router = express.Router()
const user_controller = require('../controllers/controller_usuario')
const {user_auth} = require('../middlewares/autenticar_usuario')
const multer = require('multer')
const multer_config = require('../setup/multer/multer')

router.post('/user/login', user_controller.login)
router.post('/user/sing_up', multer(multer_config).single('file'), user_controller.sing_up)
router.get('/user/logout', user_auth, user_controller.logout)
router.delete('/user', user_auth, user_controller.delete_account)
router.put('/user', multer(multer_config).single('file'), user_auth, user_controller.update_user_datas)
router.get('/user', user_auth, user_controller.user_datas)

module.exports=router