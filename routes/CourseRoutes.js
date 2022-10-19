const { Router } = require('express')
const express = require('express')

// Definir objeto de ruteo
const router = express.Router()

// Listar todos los courses
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí van a salir todos los courses"
        })
})

// Listar course por id
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a salir el course cuyo id es ${req.params.id}`
        })
})

// Actualizar course por id
router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el course cuyo id es ${req.params.id}`
        })
})

// Eliminar course por id
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el course cuyo id es ${req.params.id}`
        })
})

// Crear nuevo course
router.post('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar course"
        })
})

module.exports = router