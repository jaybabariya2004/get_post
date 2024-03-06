const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskComplete: {
        type: Boolean,
        require: true,
        trim: true,
        enum: ['true', 'false'],
        default: 'false'
    },
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    }

})

const task = mongoose.model('taskSchema',taskSchema)

module.exports = task