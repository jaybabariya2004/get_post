const express = require('express')
const { userController } = require('../Controllers')
const route = express.Router()

route.post('/add', userController.adduser)
route.get('/get', userController.getuser)
route.delete('/delete/:id',userController.deleteUser)

module.exports = route