const Place = require('../models/ArticleModel');

//get all places

//get place by id
const PlaceById = async (req, res) => {
    const {id} = req.params;
    try {
        res.redirect(`/${id}`);
    } catch (err) {
        res.json({ message: err });
    }
};
const GetAllPlaces = async (req, res) => {
    try {
        const places = await Place.find({});
        const types = [...new Set(places.map(place => place.Type))];
        res.status(200).json(types);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports = {
    GetAllPlaces,
    PlaceById
};