'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hotels extends Model {
        static associate(models) {

        }
    }

    Hotels.init({
        name: DataTypes.STRING,
        typeHotel: DataTypes.STRING,
        city: DataTypes.STRING,
        address: DataTypes.STRING,
        distance: DataTypes.STRING,
        photos: DataTypes.STRING,
        description: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        rooms: DataTypes.STRING,
        cheapestPrice: DataTypes.INTEGER,
        featured: DataTypes.BOOLEAN
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Hotels' // We need to choose the model name
    });
    return Hotels;
}