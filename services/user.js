const bCrypt = require('bcryptjs');
const { User } = require('../database/tables')

function getUserById(userId) {
    return User.findOne({
        where: {
           id: userId
        }
    })
}

function getUserByEmail(email) {
    return User.findOne({
        where: {
           email: email
        }
    })
}

function createUser(email, password) {
    return User.create({
        email,
        password
    })
}

function generateHash (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10),null);
}

function isValidPassword(userpass, password) {
    return bCrypt.compareSync(password, userpass);
}

module.exports = {
    createUser,
    getUserById,
    getUserByEmail,
    generateHash,
    isValidPassword
}