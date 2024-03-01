const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        require: true,
        trim: true,
    },
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
    Age: {
        type: Number,
        require: true,
        trim: true,
    },
    Mo_number: {
        type: Number,
        require: true,
        trim: true,
    },
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female'],
        default: 'male'
    },
    city: {
        type: String,
        require: true,
        enum: ['surat', 'vapi'],
        default: 'surat'
    },
    country: {
        type: String,
        require: true,
        enum: ['india', 'dubai'],
        default: 'india'
    }
})

const user = mongoose.model('userSchema', userSchema)

module.exports = user