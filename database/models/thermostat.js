module.exports = function(sequelize, Sequelize) {
    var Thermostat = sequelize.define('thermostats', {
        id: { 
            autoIncrement: true, 
            primaryKey: true, 
            type: Sequelize.INTEGER 
        },
        minTemperature: { 
            type: Sequelize.DOUBLE, 
            allowNull: false,
        },
        maxTemperature: { 
            type: Sequelize.DOUBLE, 
            allowNull: false,
        },
        state: {
            type: Sequelize.INTEGER, //или бул
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        
    });

    return Thermostat;
};
