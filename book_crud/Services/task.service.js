const { taskSchema } = require("../models")


const addTask = (body) => {
    return taskSchema.create(body)
}

const getTask = (body) => {
    return taskSchema.find(body)
}

module.exports = { addTask, getTask }