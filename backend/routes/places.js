const express = require('express');
const {
    GetAllPlaces,
    PlaceById
} = require('../controllers/PlacesController');
const router = express.Router();

//voir place by id
router.post('/:id', PlaceById);
//get place by id
router.get('/All/all', GetAllPlaces);

module.exports = router;