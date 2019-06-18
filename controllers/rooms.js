
const roomsApi = require("../../services/handleMeteostationDatas")
const userApi = require("../../services/user")
const { Room  } = require('../../database/tables')
const helper = require("../../services/helper")


function saveRooms(req, res, next) {
    // тут как-то от юзера получаем инфу о его комнатах
    // вероятнее всего она будет в req.body 
    const listsRooms = req.body
    // let userRooms =[]; //нах алгоритмы
    // for(let i in listsRooms) {
    //     if (listsRooms[i] == true) {
    //         userRooms.push(i)             // в итераторе у нас будет имя свойства
    //     }
    // }

}

async function getRooms(req, res, next) {
    const userId = req.user.id
    const response = await getUserRoom(userId)
    return res.json(response)
}
