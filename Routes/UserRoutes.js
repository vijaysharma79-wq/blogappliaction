const express =require('express')
const { register, Login } = require('../Controller/UserController')
const { upload } = require('../helper/multer')

const UserRoutes=express.Router()


UserRoutes.post('/register', upload.single("profilepic"),register)
UserRoutes.post('/login',Login)



module.exports={UserRoutes}