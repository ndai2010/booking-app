const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('booking', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (e) {
        console.log('Unable to connect to the database: ', e);
    }
}

module.exports = connectDB