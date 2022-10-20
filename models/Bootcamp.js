const mongoose = require('mongoose')

// Modelo de bootcamps
const BootcampsShema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Por favor, ingresa nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admite bootcamps > 30"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'Por favor, ingrese descripción'
        ],
        maxlength: [
            500,
            "No se admiten descripciones mayores > 500"
        ]
    },
    phone: {
        type: String,
        maxlength: [
            20,
            "Telefonos no mayores a 20"
        ]
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, ingrese mail valido'
        ],
        maxlength: [
            500,
            "No se admiten desccripciones mayores > 500"
        ]
    },
    averageCost: Number,
    avergeRating: {
        type: Number,
        min:[1, 'Calificaición mínima: 1'],
        max:[10, 'Calificación máxima: 10']
    }
})

module.exports = mongoose.model('bootcamp', BootcampsShema)