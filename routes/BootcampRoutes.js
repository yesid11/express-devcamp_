const express = require('express')
const {

    getAllBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
} = require('../controllers/BootcampController')


// Definir objeto de ruteo
const router = express.Router()


//crear rutas sin parametro

router.route('/')

        .get(getAllBootcamps)
        .post(createBootcamp)


router.route('/:id')

    .get(getSingleBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

    
module.exports = router