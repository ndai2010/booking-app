'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {

        }
    }

    Users.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        country: DataTypes.STRING,
        img: DataTypes.STRING,
        city: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,

    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Users' // We need to choose the model name
    });
    return Users;
}