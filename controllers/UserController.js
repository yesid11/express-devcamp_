//Dependencias

//El objeto de conexion 
const sequelize = require('../config/seq')
//Datatypes de sequelize
const {DataTypes, ValidationError} = require ('sequelize')
//El modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//Crear  la entidad
const User = UserModel(sequelize, DataTypes)

// Listar todos los users
exports.getAllUsers = async (req, res) => {

    try {
    //Traer los usuarios
    const users =await User.findAll();

    //response con datos 
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })


    } catch (error) {
        res

            .status(400)
            .json({
                "success": false,
                "error": "error con el servidor"
            })

    }
   
}

// Listar user por id
exports.getSingleUser = async (req, res) => {

    try {
        
        console.log(req.params.id)

    const users = await User.findByPk(req.params.id)
    //response con datos 
    if(users){
    res
        .status(200)
        .json({
            "success": true,
            "data":  users
        })
    }else{
        res
        .status(200)
        .json({
            "success": false,
            "data":  "Usuario no existente"
        })
    }

    } catch (error) {
        
        res

        .status(400)
        .json({
            "success": false,
            "error": "error con el servidor"
        })

    }
    
    
}

//Actualizar users
exports.updateUser = async (req , res) =>{
    
    try{   
        const SingleUser = await User.findByPk(req.params.id);
    if(!SingleUser){
        res
            .status(400)
            .json({
                 "success": false,
                 "data" : "Usuario no exitente"
        })
    }else{

        //Actualizar usuario
        await User.update( req.body, {
            where: {
              id: req.params.id 
            }
        })
        const updateUser = await User.findByPk(req.params.id)

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": false,
        "data" : updateUser
    })
          
    }
    

}catch (error){
    res 
    .status(400)
    .json({
        "success": false,
        "errors": "error de servidor desconocido"
    })
}

 
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
    

    try {
        const users = await User.create(req.body)
            
        res

        .status(200)
        .json({
            "success": true,
            "data": users
        })
        
    }catch (error) {
        if(error instanceof ValidationError){
            
            //recorrer el objeto de errores 
            //foreach 
            //map 

            const errores = error.errors.map((elemento)=>elemento.message)
        
            res 

            .status(400)
            .json({
                "success": false,
                "error": errores
            })

        }else{ 
             res

            .status(400)
            .json({
                "success": false,
                "error": "error con el servidor"
            })
        } 
        }
    }