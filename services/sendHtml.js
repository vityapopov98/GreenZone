
const config = require("../config/config")


const index = (req, res ) => {
    res.sendFile(config.viewsDir + "index.html")
}

const kitchenDevice = (req, res ) => {
    res.sendFile(config.viewsDir + "kitchenDevice.html")
}

const login = (req, res ) => {
    res.sendFile(config.viewsDir + "index.html")
}

const registration = (req, res ) => {
    res.sendFile(config.viewsDir + "registration.html")
}

const store = (req, res ) => {
    res.sendFile(config.viewsDir + "store.html")
}


module.exports = {
    index,
    kitchenDevice,
    login,
    registration,
    store
}
