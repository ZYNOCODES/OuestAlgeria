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
const UpdateByID = async (req, res) => {
    const { id } = req.params;
    const {galerie, documentations, designation, localisation, 
        description, conservation, historique, acteurs } = req.body;
    try {
        //check if the req body contains the required fields
        if (!galerie || !documentations || !designation || !localisation || !description || !conservation || !historique || !acteurs) {
            return res.status(400).json({ message: "All fields are required" });
        }
        //check if the Place has already existed
        const existing = await Place.findOne({ _id:id });
        if (!existing) {
            return res.status(404).json({ message: "Place not found" });
        }
        const updatedPlace = await Place.updateOne({ _id: id }, { 
            $set: { 
                galerie, documentations, designation, localisation, 
                description, conservation, historique, acteurs
            }
        });
        //check if the Place has been updated
        if (!updatedPlace) {
            return res.status(500).json({ message: "An error occurred while updating the Place" });
        }
        res.status(200).json(updatedPlace);
    } catch (err) {
        console.log(err);
    }
};
module.exports = {
    GetAllPlaces,
    PlaceById,
    UpdateByID
};