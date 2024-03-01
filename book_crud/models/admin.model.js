const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    Email: {
        type: String,
        require: true,
        trim: true,
    },
    Password: {
        type: Number,
        require: true,
        trim: true,
    },
})

const admin = mongoose.model('adminSchema',adminSchema)

module.exports = admin