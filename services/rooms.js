const { Room } = require('../database/tables')

function writeUserRooms(bathroom, bedroom, kitchen, childroom, balcony, 
    userRoom0, userRoom1, userRoom2, userId ) {
        
        return Room.update({
            bathroom, 
            bedroom, 
            kitchen, 
            childroom, 
            balcony, 
            userRoom0, 
            userRoom1, 
            userRoom2, 
        }, 
            {
                where: {
                    id: userId
                }
            }
        )
}


function getUserRooms(userId) { // этот параметр у юзера в req.user
    return Room.findOne({
        where: {
            userId
        }
     }) 
}

function registrationUsersRoom(userId) {  // создание строки со всеми фолсами, но с указанием айдишника(котороый совпадает с айдишником юзера)
    return Room.create({ 
        userId
    })
}



module.exports = {
    writeUserRooms,
    getUserRooms,
    registrationUsersRoom

}