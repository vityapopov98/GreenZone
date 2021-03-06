/* Passport js authentificate */

const { validationResult } = require('express-validator/check');
const UserApi = require("../../services/user")
const {validators } = require("./errorStrings")
const roomsApi = require("../../services/rooms") 

function loginUser(req, email, password, next)  { //некст нас не кинет на следующий обработчик
    const res = req.res;

    UserApi.getUserByEmail(email)
        .then( (user) => {
            if (!user) {
                throw new Error(validators.signIn.emailNotExisted);  
            }

            if (!UserApi.isValidPassword(user.password, password)) {
                throw new Error(validators.signIn.incorrectPassword);
            }

            const userinfo = user.get();
            return next(null, userinfo);
        })
        .catch(err => {
            res.statusCode = 406;
            res.send(err.message)
        });
}



function registerUser(req, email, password, done) {
    const res = req.res;
    const name = req.body.name
    const surname = req.body.surname

    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        res.statusCode = 406;
        res.send(validators.register.validationFailed)
    }

    UserApi.getUserByEmail(email).then(user => {
        console.log(user)
        if (user) {
            throw new Error(validators.register.existedEmail);
        } else {
            const userPassword = UserApi.generateHash(password); // зашифрованный

            UserApi.createUser(email, userPassword, name, surname).then((newUser) => {
                if (!newUser) {
                    throw new Error(validators.register.userNotCreated);
                }

                 // создать пустую строку в rooms
                console.log(newUser)
                roomsApi.registrationUsersRoom(newUser.id);

                done(null, newUser); //все ок
            }).catch(err => {
                // не все ок
                res.statusCode = 406;
                res.send(err.message)
            });
        }
    }).catch((err) => {
        res.statusCode = 406;
        res.send(err.message)
    })
}


module.exports = {
    loginUser,
    registerUser
}