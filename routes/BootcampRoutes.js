const { Router } = require('express')
const express = require('express')

// Definir objeto de ruteo
const router = express.Router()

// Listar todos los bootcamps
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí van a salir todos los bootcamps"
        })
})

// Listar bootcamp por id
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})

// Actualizar bootcamp por id
router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
})

// Eliminar bootcamp por id
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el bootcamp cuyo id es ${req.params.id}`
        })
})

// Crear nuevo bootcamp
router.post('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar bootcamp"
        })
})

module.exports = router