module.exports = function(sequelize, Sequelize) {
    var ClimateStation = sequelize.define('climateStations', {
        id: { 
            autoIncrement: true, 
            primaryKey: true, 
            type: Sequelize.INTEGER 
        },
        temperature: { 
            type: Sequelize.DOUBLE, 
            allowNull: false,
        },
        humidity: { 
            type: Sequelize.DOUBLE, 
            allowNull: false 
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    });

    return ClimateStation;
};
