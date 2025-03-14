const Place = require('../models/ArticleModel');
const path = require('path');
const fs = require('fs');

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
const UpdateByIDIMGs = async (req, res) => {
    const { id } = req.params;
    const {galerie, designation, 
        description, historique } = req.body;
    try {
        //check if the req body contains the required fields
        if (!galerie || !designation || !description || !historique) {
            return res.status(400).json({ message: "All fields are required" });
        }
        //check if the Place has already existed
        const existing = await Place.findOne({ _id:id });
        if (!existing) {
            return res.status(404).json({ message: "Place not found" });
        }
        //update the Place by (galerie=galerie, designation.img=designation.img, description.img=description.img, historique.img=historique.img)
        const updatedPlace = await Place.updateOne({ _id: id }, { 
            $set: { 
            'galerie': galerie,
            'designation.img': designation.img,
            'description.img': description.img,
            'historique.img': historique.img            
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
const createNewPlace = async (req, res) => {
    console.log("createNewPlace");
    const {name, long, latit} = req.body;
    console.log(req.body);
    try {
        //check if the req body contains the required fields
        if (!name || !long || !latit) {
            return res.status(400).json({ message: "All fields are required" });
        }
        //create a new Place
        const savedPlace = await Place.create({
            Nom: name, 
            LongitudeX: long, 
            LattitudeY: latit,
            Type: "paysages",
        });
        //check if the Place has been saved
        if (!savedPlace) {
            return res.status(500).json({ message: "An error occurred while saving the Place" });
        }
        res.status(201).json(savedPlace);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
const downloadPdf = async (req, res) => {
    const filePath = path.join(__dirname, '../views/css/images', 'RapportduMarechalVaillant1857.pdf');

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Set the appropriate headers for the response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=Rapport du Maréchal Vaillant 1857.pdf');

        // Create a read stream from the file and pipe it to the response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        res.status(404).send('File not found');
    }
}

module.exports = {
    GetAllPlaces,
    PlaceById,
    UpdateByID,
    UpdateByIDIMGs,
    createNewPlace,
    downloadPdf
};