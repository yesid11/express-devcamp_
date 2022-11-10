//Dependencias

//El objeto de conexion 
const sequelize = require('../config/seq')
//Datatypes de sequelize
const {DataTypes, ValidationError} = require ('sequelize')
//El modelo
const ReviewModel = require('../models/reviews')
const review = require('../models/reviews')
//Crear  la entidad
const Review = ReviewModel(sequelize, DataTypes)

// Listar todos los users
exports.getAllReviews = async (req, res) => {

    try {
    //Traer los usuarios
    const reviews =await Review.findAll();

    //response con datos 
    res
        .status(200)
        .json({
            "success": true,
            "data": reviews
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
exports.getSingleReview = async (req, res) => {

    try {
        
        console.log(req.params.id)

    const reviews = await Review.findByPk(req.params.id)
    //response con datos 
    if(reviews){
    res
        .status(200)
        .json({
            "success": true,
            "data":  reviews
        })
    }else{
        res
        .status(200)
        .json({
            "success": false,
            "data":  "Review no existente"
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
exports.updateReview = async (req , res) =>{
    
    try{   
        const SingleReview = await User.findByPk(req.params.id);
    if(!SingleReview){
        res
            .status(400)
            .json({
                 "success": false,
                 "data" : "Review no exitente"
        })
    }else{

        //Actualizar usuario
        await Review.update( req.body, {
            where: {
              id: req.params.id 
            }
        })
        const updateReview = await Review.findByPk(req.params.id)

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": false,
        "data" : updateReview
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
exports.deleteReview = async (req , res) => {

    try {
    const reviews = await Review.findByPk(req.params.id);
    
    if(!reviews){
        res
        .status(200)
        .json({
            "success": false,
            "errors": "Usuario eliminado"
        })
    }else{
        await Review.destroy({
            where: {
                id: req.params.id
            }
        });
    }
    } catch (error) {
    res
    .status(400)
    .json({
        "success": false,
        "errors": " Error de servidor desconocido"
    })
}
}

// Crear nuevo user
exports.createReview = async (req, res) => {
    

    try {
        const review = await Review.create(req.body)
            
        res

        .status(200)
        .json({
            "success": true,
            "data": review
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