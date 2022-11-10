const express = require('express')
const {
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
} = require('../controllers/ReviewController')


// Definir objeto de ruteo
const router=express.Router()


//crear rutas sin parametro

router.route('/')

        .get(getAllReviews)
        .post(createReview)


router.route('/:id')

    .get(getSingleReview)
    .put(updateReview)
    .delete(deleteReview)

    
module.exports = router