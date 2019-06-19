module.exports = function(sequelize, Sequelize) {
    var Rooms = sequelize.define('rooms', {
        id: { 
            autoIncrement: true, 
            primaryKey: true, 
            type: Sequelize.INTEGER 
        },
        bathroom: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        bedroom: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        kitchen: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        childroom: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        balcony: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        userRoom0: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        userRoom1: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        userRoom2: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }

    });

    return Rooms;
};
