const { taskServices } = require("../Services")


const addTask = async (req, res) => {

    try {

        let body = req.body

        let task = await taskServices.addTask(body)

        res.status(200).json({ message: 'task added sucessfully', task })
    } catch (err) {
        res.status(400).json({ success: false, err: err.message })
    }
}

const getTask = async (req, res) => {
    try {
        let task = await taskServices.getTask()
        if (!task) {
            throw new Error('Task not complete')
        }
        res.status(200).json({ message: 'Task get success', task })
    } catch (err) {
        res.status(400).json({ success: false, err: err.message })
    }
}

module.exports = { addTask, getTask }