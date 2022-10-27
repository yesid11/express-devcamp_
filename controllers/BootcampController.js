// Listar todos los Bootcamps
exports.getAllBootcamps = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqqui van a salir los Bootcamps"
        })
}

// Listar bootcamp por id
exports.getSingleBootcamp = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a salir el Bootcamp cuyo id es:  ${req.params.id}`
        })
}

// Actualizar Bootcamp por id
exports.updateBootcamp = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el Bootcamp cuyo id es ${req.params.id}`
        })
}

// Eliminar Bootcamp por id
exports.deleteBootcamp = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el Bootcamp cuyo id es ${req.params.id}`
        })
}

// Crear nuevo Bootcamp
exports.createBootcamp = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar Bootcamp"
        })
}
