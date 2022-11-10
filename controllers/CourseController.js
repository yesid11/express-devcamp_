//Dependencias

//El objeto de conexion 
const sequelize = require('../config/seq')
//Datatypes de sequelize
const {DataTypes, ValidationError} = require ('sequelize')
//El modelo
const CourseModel = require('../models/courses')
//Crear  la entidad
const Course = CourseModel(sequelize, DataTypes)

// Listar todos los cursos
exports.getAllCourses = async (req, res) => {

    try {
    //Traer los cursos
    const AllCourses = await Course.findAll();

    //response con datos 
    res
        .status(200)
        .json({
            "success": true,
            "data": AllCourses
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

// Listar courses por id
exports.getSingleCourse = async (req, res) => {

    try {
        
        console.log(req.params.id)

    const courses = await Course.findByPk(req.params.id)
    //response con datos 
    if(courses){
    res
        .status(200)
        .json({
            "success": true,
            "data":  courses
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

// Actualizar course por id
exports.updateCourse = async (req , res) =>{
    
    try{   
        const SingleCourse = await Course.findByPk(req.params.id);
    if(!SingleCourse){
        res
            .status(400)
            .json({
                 "success": false,
                 "data" : "Usuario no exitente"
        })
    }else{

        //Actualizar curso
        await Course.update( req.body, {
            where: {
              id: req.params.id 
            }
        })
        const updateCourse = await Course.findByPk(req.params.id)

    //console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": false,
        "data" : updateCourse
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

// Eliminar course por id
exports.deleteCourse = async (req , res) => {

    try {
    const courses = await Course.findByPk(req.params.id);
    
    if(!courses){
        res
        .status(200)
        .json({
            "success": false,
            "errors": "Curso eliminado"
        })
    }else{
        await Course.destroy({
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
// Crear nuevo course 
exports.createCourse = async (req, res) => {
    

    try {
        const courses = await Course.create(req.body)
            
        res

        .status(200)
        .json({
            "success": true,
            "data": courses 
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
