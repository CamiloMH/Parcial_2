// const mariadb = require('mariadb')
const { Sequelize } = require('sequelize');

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_DIALECT  } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: false
})

module.exports = { sequelize }