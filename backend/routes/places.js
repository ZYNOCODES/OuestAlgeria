const express = require('express');
const {
    GetAllPlaces,
    PlaceById,
    UpdateByID,
    UpdateByIDIMGs
} = require('../controllers/PlacesController');
const router = express.Router();

//voir place by id
router.post('/:id', PlaceById);
//get place by id
router.get('/All/all', GetAllPlaces);
//update place by id
router.patch('/update/:id', UpdateByID);
//update place by id
router.patch('/updateIMGs/:id', UpdateByIDIMGs);

module.exports = router;