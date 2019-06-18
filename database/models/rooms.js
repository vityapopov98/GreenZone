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
        badroom: {
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
        },
        userId: { // тут то же число, что и id в таблице юзеров, по этому параметру мы и свяжем их
            type:Sequelize.INTEGER,
            allowNull: false
        }

    });

    return Rooms;
};
