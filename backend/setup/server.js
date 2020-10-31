const express= require('express')
const app= express()
const bodyparser= require('body-parser')
const port= process.env.PORT || 7070
const cors= require('cors')
const rota_usuario = require('../routes/rota_usuario')
const rota_rua = require('../routes/rota_rua')
const rota_registro = require('../routes/rota_registro')
require('dotenv').config()

app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use(rota_usuario)
/* app.use(rota_rua)
app.use(rota_registro) */

app.listen(port, () => console.log(`Porta: ${port}`));