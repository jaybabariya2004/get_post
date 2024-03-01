require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const connectDB = require('./db/dbConnection')
const routes = require('./Routes')
const { userServices } = require('./Services')

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// view engine
app.set('view engine', 'ejs')

// routes
app.use('/v1', routes)

app.get('/', async (req, res) => {
    let fUser = await userServices.getuser()
    console.log(fUser, "fUser")
    res.render('.')
})

// db connect
connectDB()

// server
http.createServer(app).listen(process.env.PORT, () => {
    console.log('server started successfully');
})
