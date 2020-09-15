const express= require('express')
const router = express.Router()
const user_controller = require('../controllers/controller_usuario')
const {user_auth} = require('../middlewares/autenticar_usuario')

router.post('/user/login', user_controller.login)
router.post('/user/sing_up', user_controller.sing_up)

module.exports=router