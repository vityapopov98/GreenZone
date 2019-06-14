
const config = require("../config/config")


const index = (req, res ) => {
    res.sendFile(config.viewsDir + "index.html")
}

const kitchenDevices = (req, res ) => {
    res.sendFile(config.viewsDir + "kitchenDevices.html")
}

const login = (req, res ) => {
    res.sendFile(config.viewsDir + "login.html")
}

const registration = (req, res ) => {
    res.sendFile(config.viewsDir + "registration.html")
}

const store = (req, res ) => {
    res.sendFile(config.viewsDir + "store.html")
}


module.exports = {
    index,
    kitchenDevices,
    login,
    registration,
    store
}
