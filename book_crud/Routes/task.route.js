const express = require('express')
const { taskController } = require('../Controllers')
const route = express.Router()

route.post('/add', taskController.addTask)
route.get('/get', taskController.getTask)

module.exports = route