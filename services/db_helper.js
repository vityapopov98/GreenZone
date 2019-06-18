const { Op } = require('sequelize')

function getLastDatasFromSQL(model, params) { 
    //SELECT * FROM tablename ORDER BY ID DESC LIMIT 1 
    
    return model.findOne({ 
        order: [
            ['id', 'DESC']
        ],
        where: {
            ...params
        },
        limit: 1
    })

}

