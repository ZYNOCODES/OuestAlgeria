const mongoose = require('mongoose');
  
const placesSchema = new mongoose.Schema({
    wkt_geom: {
        type: String,
        required: false,
        nullable: true,
    },
    id: {
        type: Number,
        require: false,
        nullable: true,
    },
    Nom: {
        type: String,
        require: false,
        nullable: true,
    },
    Type: {
        type: String,
        require: false,
        nullable: true,
    },
    wilaya: {
        type: String,
        require: false,
        nullable: true,
    },
    Ancien_Nom: {
        type: String,
        require: false,
        nullable: true,
    },
    Dispositio: {
        type: String,
        require: false,
        nullable: true,
    },
    CodeWilay: {
        type: Number,
        require: false,
        nullable: true,
    },
    CodeCommu: {
        type: Number,
        require: false,
        nullable: true,
    },
    Commune: {
        type: String,
        require: false,
        nullable: true,
    },
    PositionKm: {
        type: String,
        require: false,
        nullable: true,
    },
    M_Oeuvre: {
        type: String,
        require: false,
        nullable: true,
    },
    LigneFerro: {
        type: String,
        require: false,
        nullable: true,
    },
    StyleArchi: {
        type: String,
        require: false,
        nullable: true,
    },
    Date_Const: {
        type: String,
        require: false,
        nullable: true,
    },
    Date_Recon: {
        type: String,
        require: false,
        nullable: true,
    },
    Cie_Ferrov: {
        type: String,
        require: false,
        nullable: true,
    },
    Etat_Actu: {
        type: String,
        require: false,
        nullable: true,
    },
    LattitudeY: {
        type: String,
        require: false,
        nullable: true,
    },
    LongitudeX: {
        type: String,
        require: false,
        nullable: true,
    },
    Longeur: {
        type: Number,
        require: false,
        nullable: true,
    },
    Nom_Oued: {
        type: String,
        require: false,
        nullable: true,
    },
    Ligne: {
        type: String,
        require: false,
        nullable: true,
    },
    Section: {
        type: String,
        require: false,
        nullable: true,
    },
    PositionKi:{
        type: String,
        require: false,
        nullable: true,
    },
    FicheInven:{
        type: String,
        require: false,
        nullable: true,
    },
    PhotoIdent :{
        type: String,
        require: false,
        nullable: true,
    },
    Categorie:{
        type: String,
        require: false,
        nullable: true,
    },
    galerie: {
        plan: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ],
        photographie: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ],
    },
    documentations: {
        centrearchive: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ],
        site: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ],
        livre: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ],
    },
    designation: {
        img: {
            type: String,
            require: false,
            nullable: true,
        },
        description: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ]
    },
    localisation: [
        {
            type: String,
            require: false,
            nullable: true,
        }
    ],
    description: {
        img: {
            type: String,
            require: false,
            nullable: true,
        },
        description: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ],
        materiaux: {
            technique1: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            technique2: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            structures: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
        }
    },
    conservation: {
        justification: {
            type: String,
            require: false,
            nullable: true,
        },
        integrite: {
            type: String,
            require: false,
            nullable: true,
        },
        authenticite: {
            type: String,
            require: false,
            nullable: true,
        },
    },
    historique: {
        img: {
            type: String,
            require: false,
            nullable: true,
        },
        description: [
            {
                type: String,
                require: false,
                nullable: true,
            }
        ]
    },
    acteurs:{
        ancienne:{
            compagnie: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            entreprise: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            architecte: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            ingenieurs: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
        },
        modification: {
            compagnie: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            entreprise: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            architecte: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            ingenieurs: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
        },
        modernisation: {
            compagnie: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            entreprise: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            architecte: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
            ingenieurs: [
                {
                    type: String,
                    require: false,
                    nullable: true,
                }
            ],
        },
    }
});

const places = mongoose.model('places', placesSchema);

module.exports = places;