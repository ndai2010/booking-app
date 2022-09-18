'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rooms extends Model {
        static associate(models) {

        }
    }

    Rooms.init({
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        maxPeople: DataTypes.INTEGER,
        description: DataTypes.STRING,
        roomNumbers: DataTypes.INTEGER,
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Rooms' // We need to choose the model name
    });
    return Rooms;
}