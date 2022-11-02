
// Listar todos los courses
exports.getAllCourses = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui van a salir los cursos"
        })
}

// Listar courses por id
exports.getSingleCourse = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a salir el course cuyo id es:  ${req.params.id}`
        })
}

// Actualizar course por id
exports.updateCourse = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el course cuyo id es ${req.params.id}`
        })
}

// Eliminar course por id
exports.deleteCourse = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el user cuyo id es ${req.params.id}`
        })
}

// Crear nuevo course 
exports.createCourse = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar courses"
        })
}
