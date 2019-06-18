
const config = require("../config/config")


const index = (req, res ) => {
    res.sendFile(config.viewsDir + "index.html")
}

const kitchenDevices = (req, res ) => {
    res.sendFile(config.viewsDir + "kitchenDevices.html")
}

const login = (req, res ) => {
    if (req.isAuthenticated()) {
        res.redirect("/account")
    }
    else {
        res.sendFile(config.viewsDir + "login.html")
    }
}

const success = (req, res) => {
    res.send("SUCCESS")
}

const registration = (req, res ) => {
    if (req.isAuthenticated()) {
        res.redirect("/account")
    }
    else {
        res.sendFile(config.viewsDir + "registration.html")
    }
}

const store = (req, res ) => {
    res.sendFile(config.viewsDir + "store.html")
}

const account = (req, res ) => {
    res.sendFile(config.viewsDir + "account.html")
}

module.exports = {
    index,
    kitchenDevices,
    login,
    registration,
    store,
    account,
    success
}
