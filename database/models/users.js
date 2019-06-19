module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('users', {
        id: { 
            autoIncrement: true, 
            primaryKey: true, 
            type: Sequelize.INTEGER 
        },
        email: { 
            type: Sequelize.STRING, 
            unique: true, 
            validate: { 
                isEmail: true 
            } 
        },
        password: { 
            type: Sequelize.STRING, 
            allowNull: false 
        },
        name: {
            type: Sequelize.STRING, 
            allowNull: false 
        },
        surname: {
            type: Sequelize.STRING, 
            allowNull: false 
        },
        climateStationId: {
            type: Sequelize.INTEGER 
        },
        thermostatId: {
            type: Sequelize.INTEGER 
        }
    });

    return User;
};
