const bodyParser = require('body-parser');

const sendHtml = require("../services/sendHtml")

//  проверка логирования
const { isLoggedIn, loggedCheker } = require('../controllers/users/logged.js');
const roomController = require("../controllers/rooms")


function initAuthControllers(app, passport)  {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    //-------- рендер страниц -------------
    app.get('/', sendHtml.index);
    app.get('/store', isLoggedIn, sendHtml.store);
    app.get('/registration', sendHtml.registration);
    app.get('/login', sendHtml.login);
    app.get('/kitchenDevices', isLoggedIn, sendHtml.kitchenDevices);
    app.get('/account', isLoggedIn, sendHtml.account);


    //----------Rooms API----------------------------

    // юзер выбирает на ui комнаты и кидает их пост запросом на 
    app.post("/addNewRooms", roomController.saveRooms, sendHtml.success  ) // тут бы еще нужно определить есть ли у пользователя созраеннные комнаты, либо он первый раз
    app.get("/getUserRooms", isLoggedIn, roomController.getRooms)
    
    //----------Users API------------------------
    app.post('/register',urlencodedParser,
        passport.authenticate('local-signup', {
            successRedirect: '/',//не жди от этого чего-то
            failureRedirect: '/register'
        }),
    );

    app.post('/sign_In', urlencodedParser,
        passport.authenticate('local-signin', {
            successRedirect: '/', //это не робит так как нужно, но это хер уберешь, все ломается, тащите сюда одмена пасспорт джс
            failureRedirect: '/sign_In'
        })
    );
}

module.exports = {
    initAuthControllers
};