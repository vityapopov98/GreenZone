
const roomsApi = require("../services/rooms")



function saveRooms(req, res, next) {
    // тут как-то от юзера получаем инфу о его комнатах
    // вероятнее всего она будет в req.body 
    const listsRooms = req.body
    console.log(listsRooms)
    // let userRooms =[]; //нах алгоритмы
    // for(let i in listsRooms) {
    //     if (listsRooms[i] == true) {
    //         userRooms.push(i)  // в итераторе у нас будет имя свойства
    //     }
    // }
    
    const bathroom = listsRooms.bathroom 
    const badroom = listsRooms.badroom
    const kitchen = listsRooms.kitchen
    const childroom = listsRooms.childroom
    const balcony = listsRooms.balcony
    const  userRoom0 = listsRooms.userRoom0 
    const userRoom1 = listsRooms.userRoom1
    const userRoom2 = listsRooms.userRoom2 
    const userId = listsRooms.userId 
    console.log(badroom)
    try {
    roomsApi.writeUserRooms(bathroom, badroom, kitchen, childroom, 
        balcony, userRoom0, userRoom1, userRoom2, userId)
    }
    catch(error) {
        console.error("Rooms saving error ", error)
        return
    }
    next()
}

async function getRooms(req, res, next) {
    const userId = req.user.id
    try {
        const response = await roomsApi. getUserRooms(userId)
        return res.json(response)
    }
    catch(error) {
        console.error("Rooms error!", error)
    }
    next()
}

module.exports = {
    getRooms,
    saveRooms
}