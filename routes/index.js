const bodyParser = require('body-parser');

const sendHtml = require("../services/sendHtml")

//  проверка логирования
const { isLoggedIn, loggedCheker } = require('../controllers/users/logged.js');



function initAuthControllers(app, passport)  {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    //-------- рендер страниц -------------
    app.get('/', sendHtml.index);


    
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