const express = require('express');
const router = express.Router();
const Place = require('../models/ArticleModel');

const { ensureAuthenticated, forwardAuthenticated } = require('../middleware/auth');

router.get("/", async (req, res) => {
    try {
        const result = await Place.find({});
        if (result) {
            const Gare = result.filter(place => place.Type === "Gare Terminus");
            const Station = result.filter(place => place.Type === "Station Intermediaire");
            const Halte = result.filter(place => place.Type === "Halte");
            const Pont = result.filter(place => place.Type === "Pont");
            const PontMetallique = result.filter(place => place.Type === "Pont Metallique" || place.Type === "Pont metallique");
            const Viaducenmaconnerie = result.filter(place => place.Type === "Viaduc en maconnerie");
            const Viaducmetallique = result.filter(place => place.Type === "Viaduc metallique");
            const maconnerie = result.filter(place => place.Type === "maconnerie");
            const PontMetalliqueenArc = result.filter(place => place.Type === "Pont Metallique en Arc");

            return res.render('Home', { Gare, Station, Halte, Pont, 
                PontMetallique, Viaducenmaconnerie, Viaducmetallique, 
                maconnerie, PontMetalliqueenArc, places: result });
        } else {
            return res.status(404).json({ error: 'Places not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.get("/Carte", (req, res) => {
    return res.render('Admin');
});

router.get("/Documents", (req, res) => {
    return res.render('Documents');
});

router.get("/Contact", (req, res) => {
    return res.render('Contact');
});

router.get("/About", (req, res) => {
    return res.render('About');
});

router.get("/Gares", async (req, res) => {
    try {
        const result = await Place.find({});
        if (result) {
            const Gare = result.filter(place => place.Type === "Gare Terminus");
            const Station = result.filter(place => place.Type === "Station Intermediaire");
            const Halte = result.filter(place => place.Type === "Halte");
            return res.render('Gares', { Gare, Station, Halte});
        } else {
            return res.status(404).json({ error: 'Places not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.get("/Lignes", async (req, res) => {
    return res.render('Lignes');
});

router.get("/Ouvrages", async (req, res) => {
    try {
        const result = await Place.find({});
        if (result) {
            const ouvrage = result.filter(place => (place.Type === "Pont")||
            (place.Type === "Pont Metallique")||(place.Type === "Pont metallique")||
            (place.Type === "Viaduc en maconnerie")||
            (place.Type === "Viaduc metallique")||
            (place.Type === "maconnerie")||
            (place.Type === "Pont Metallique en Arc"));
            return res.render('Ouvrages', { Ouvrage : ouvrage});
        } else {
            return res.status(404).json({ error: 'Places not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.get("/Valorisation", async (req, res) => {
    return res.render('Valorisation');
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Place.findOne({ _id: id });
        if (result) {
            return res.render('AffichageV1', { place: result });
        } else {
            return res.status(404).json({ error: 'Place not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.post("/:type", async (req, res) => {
    const {type} = req.params;
    try {
        res.redirect(`/${type}`);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;