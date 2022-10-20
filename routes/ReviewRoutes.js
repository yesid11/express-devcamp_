const { Router } = require('express')
const express = require('express')

// Definir objeto de ruteo
const router = express.Router()

// Listar todos los reviews
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí van a salir todos los reviews"
        })
})

// Listar review por id
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a salir el review cuyo id es ${req.params.id}`
        })
})

// Actualizar review por id
router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el review cuyo id es ${req.params.id}`
        })
})

// Eliminar review por id
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el review cuyo id es ${req.params.id}`
        })
})

// Crear nuevo review
router.post('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar review"
        })
})

module.exports = router