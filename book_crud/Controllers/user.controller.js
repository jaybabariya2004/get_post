const { userServices } = require("../Services")

const adduser = async (req, res) => {
    try {

        let body = req.body

        let user = await userServices.adduser(body)

        res.status(200).json({ Message: "user added successfully", user })
    } catch (err) {
        res.status(400).json({ success: false, err: err.message })
    }
}

const getuser = async (req, res) => {
    try {
        let user = await userServices.getuser()
        if (!user) {
            throw new Error('user not found')
        }
        res.status(200).json({ message: "student get success", user })
    } catch (err) {
        res.status(400).json({ success: false, err: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {

        let id = req.params;
        console.log(id)

        let userExist = await userServices.finduser(id)

        if (!userExist) {
            res.status(400).json({ message: "user not found" })
        }

        let user = await userServices.deleteUser(id)

        res.status(200).json({ message: "user delet successfully", user })
    } catch (err) {
        console.log(err, 'user delete error')
    }
}

module.exports = { adduser, getuser, deleteUser }