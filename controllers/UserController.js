//Dependencias

//El objeto de conexion 
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes } = require('sequelize')
//El modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//Crear  la entidad
const User = UserModel(sequelize, DataTypes)

// Listar todos los users
exports.getAllUsers = async (req, res) => {

    //Traer los usuarios
    const users =await User.findAll();

    //response con datos 
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Listar user por id
exports.getSingleUser = async (req, res) => {
    console.log(req.params.id)

    const users = await User.findByPk(req.params.id)
    //response con datos 
    res
        .status(200)
        .json({
            "success": true,
            "data":  users
        })
}

// Actualizar user por id
exports.updateUser = async(req, res) => {
    console.log(req.params.id)

    const updateUser = User.update(req.body,{
        where:{ 
            id:(req.params.id)
           }
    }) 
    const users = await User.findAll({
        where:{ 
         id:(req.params.id)
        }
    })
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Eliminar user por id
exports.deleteUser = async(req, res) => {
    console.log(req.params.id)
    const deleteUsers=await User.destroy({
        where:{
            id:(req.params.id)
        }
    })
    const users =await User.findAll();
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Crear nuevo user
exports.createUser = async (req, res) => {
    
    const users = await User.create(req.body)
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}
