const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/leadApp.sqlite'
});

const Lead = sequelize.define('Lead', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { Lead, sequelize };
