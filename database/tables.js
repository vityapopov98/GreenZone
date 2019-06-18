const models = require('./models');

const User = models.users
const Room = models.rooms

module.exports = {
    User,
    Room
}