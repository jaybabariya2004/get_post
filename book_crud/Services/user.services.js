const { userSchema } = require("../models")


const adduser = (body) => {
    return userSchema.create(body)
}

const getuser = (body) => {
    return userSchema.find(body)
}

const findUserd = (id) => {
    return userSchema.findById(id)
}

const finduser = (userName) => {
    console.log(userName, "userName")
    return userSchema.findOne({ userName })
}

module.exports = { adduser,getuser,findUserd,finduser }