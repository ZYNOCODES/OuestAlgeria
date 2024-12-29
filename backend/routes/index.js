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
            const validTypes = ["Gare Terminus", "Station Intermediaire", "Halte"];
            const Gare = result.filter(place => validTypes.includes(place.Type));

            // Desired sorting order
            const desiredOrder = [
                "Gare d'Oran",                     // Matches "22. Gare d'Oran"
                "Es Sénia",                        // Matches "6. Es Sénia"
                "Valmy",                           // Matches "2. Valmy"
                "Arbal",                           // Matches "18. Arbal"
                "Oued Tlélat",                     // Matches "29. Oued Tlélat"
                "Zahana",                          // Matches "23. Zahana"
                "Lauriers Roses",                  // Matches "14. Lauriers Roses"
                "Ain El Berd",                     // Matches "30. Ain El Berd"
                "Sidi Hamadouche",                 // Matches "10. Sidi Hamadouche"
                "Prudon",                          // 
                "Gare de Sidi Bel Abbès",          // Matches "9. Gare de Sidi Bel Abbès"
                "Sidi Lahcen",                     // Matches "15. Sidi Lahcen"
                "Sidi Khaled",                     // Matches "7. Sidi Khaled"
                "Bouchabka",                       // Matches "8. Bouchabka"
                "Tabia",                           // Matches "31. Tabia"
                "Taffamane",                       // Matches "5. Taffamane"
                "Ben Badis",                       // Matches "1. Ben Badis"
                "Ain Tellout",                     // Matches "11. Ain Tellout"
                "Ouled Mimoun",                     // 
                "Oued Lakhdar",                     // 
                "Ain Fezza",                       // Matches "12. Ain Fezza"
                "Gare_de_Tlemcen",                 // Matches "13. Gare_de_Tlemcen"
                "Mansourah",                       // Matches "16. Mansourah"
                "Ain Douz",                        // Matches "26. Ain Douz"
                "Zelboune",                         // Matches "20. Zelboune"
                "Sebra",                           // Matches "21. Sebra"
                "Sidi-Medjahed",                   // Matches "27. Sidi-Medjahed"
                "Tralimet",                         // **Closest match: "Tralimet" (spelling difference)**
                "Maghnia",                         // Matches "24. Maghnia"
                "Akid Abbes"                       // Matches "28. Akid Abbes"
            ];

            // Sort the Gare list based on the desired order
            const sortedGare = desiredOrder
                .map(name => Gare.find(place => place.Nom === name))
                .filter(Boolean);
            // Add unmatched Gares at the bottom
            const unmatchedGares = Gare.filter(place => !desiredOrder.includes(place.Nom));
            const finalSortedGare = [...sortedGare, ...unmatchedGares];

            // List of Gares to make bold
            const boldGares = [
                "Gare d'Oran",
                "Gare de Sidi Bel Abbès",
                "Gare_de_Tlemcen",
                "Maghnia"
            ];

            // Pass both sortedGare and boldGares to the frontend
            return res.render('Gares', { sortedGare: finalSortedGare, boldGares });
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
router.get("/Viaduc", async (req, res) => {
    try {
        const result = await Place.find({});
        if (result) {
            const viaduc = result.filter(place => 
                (place.Type === "Viaduc en maconnerie")||
                (place.Type === "maconnerie")||
                (place.Type === "Viaduc metallique")
            );
            return res.render('Viaduc', { Viaduc : viaduc});
        } else {
            return res.status(404).json({ error: 'Places not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.get("/Pont", async (req, res) => {
    try {
        const result = await Place.find({});
        if (result) {
            const ponts = result.filter(place => 
                (place.Type === "Pont")||
                (place.Type === "Pont Metallique")||
                (place.Type === "Pont metallique")||
                (place.Type === "Pont Metallique en Arc")
            );
            return res.render('Pont', { Pont : ponts});
        } else {
            return res.status(404).json({ error: 'ponts not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.get("/Galerie", async (req, res) => {
    return res.render('Galerie');
});
router.get("/Valorisation", async (req, res) => {
    return res.render('Valorisation');
});
router.get("/Historique", async (req, res) => {
    return res.render('Historique');
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
router.get("/ouvrage/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Place.findOne({ _id: id });
        if (result) {
            return res.render('AffichageV2', { place: result });
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