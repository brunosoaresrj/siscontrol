const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../controller/db');

    const Notebooks = database.define('notebooks', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        patrimonio: {
            type: sequelize.INTEGER(6),
            allowNull: false
        },
        serial_number: {
            type: sequelize.STRING(10),
            allowNull: false
        },
        fabricante: {
            type: sequelize.STRING(10),
            allowNull: false
        },
        modelo: {
            type: sequelize.STRING(30),
            allowNull: false
        },
        garantia: {
            type: sequelize.STRING(10),
            allowNull: false
        },
        service_tag: {
            type: sequelize.STRING(10),
            allowNull: false
        },
        entrega: {
            type: sequelize.STRING(3),
            allowNull: true
        },
        usuario: {
            type: sequelize.STRING(50),
            allowNull: true
        },
        area: {
            type: sequelize.STRING(30),
            allowNull: true
        },
        cargo: {
            type: sequelize.STRING(20),
            allowNull: true
        }
    })

    module.exports = Notebooks;