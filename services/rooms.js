const { Room } = require('../database/tables')

function writeUserRooms(bathroom, badroom, kitchen, childroom, balcony, 
    userRoom0, userRoom1, userRoom2, userId ) {

    return Room.create({ //т.к. названия аргументов совпадают с названиями столбцов в таблице, можно юзать сокращенную форму
        bathroom, 
        badroom, 
        kitchen, 
        childroom, 
        balcony, 
        userRoom0, 
        userRoom1, 
        userRoom2, 
        userId
    })
}


function getUserRoom(userId) { // этот параметр у юзера в req.user
    return Room.findOne({
        where: {
            userId
        }
     }) 
}



module.exports = {
    writeUserRooms,
    getUserRoom

}