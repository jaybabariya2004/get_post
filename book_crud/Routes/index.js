const express = require('express')
const routes = express.Router()
const userRoute = require('./user.route')
const taskRoute = require('./task.route')

routes.use('/user', userRoute)
routes.use('/task', taskRoute)

module.exports = routes