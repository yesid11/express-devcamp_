const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes } = require('sequelize')

// Crear instancia de el modelo User
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)

// Definir la función de conexión a la base de datos

const connectDB = async () => {
    try {
        //conectarse a la bd
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgWhite.magenta)
        const jane = await User.create({ username: "Jane", email: "jane@gmail.com", password: "12345" });
        console.log("Jane's auto-generated ID:", jane.username);
    } catch (error) {
        console.log(error)
    }
}

connectDB()