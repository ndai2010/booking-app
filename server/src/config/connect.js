const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('booking', 'postgres', "2010", {
    host: 'localhost',
    dialect: 'postgres'
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