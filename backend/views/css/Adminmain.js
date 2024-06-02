const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

const map = L.map('map').setView([35.25085802266448, -1.1686706542968752], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

// Create polyline
var lineCoordinates = [
    [35.69873978861225,-0.638246122889966],
    [35.620785751059096,-0.587130866775292],
    [35.571189937514404,-0.542709265572674],
    [35.54640802694567,-0.451877913450755],
    [35.51251325759334,-0.409461181912292],
    [35.46468716752258,-0.394971002004698],
    [35.36335514696351,-0.509810282506524],
    [35.30571864597986,-0.548126089601797],
    [35.2614948947815,-0.568341666776229],
    [35.19818878238979,-0.638986240747964],
    [35.164151645081716,-0.687870932839916],
    [35.11254620982446,-0.714891602615403],
    [35.05908450831036,-0.724831277543694],
    [35.02105796173658,-0.74320176925427],
    [34.96313968410208,-0.859732376506406],
    [34.933297455112964,-0.914493494491647],
    [34.929732683452066,-0.956618569601194],
    [34.9025044549154,-1.026417210924172],
    [34.86911516043487,-1.131273656413615],
    [34.87694183471008,-1.241009846869554],
    [34.8838884782675,-1.29996700832521],
    [34.87226781556607,-1.342611666673615],
    [34.853547776791025,-1.405527702450567],
    [34.85156117106218,-1.438351977120567],
    [34.82672874650801,-1.522472239359875],
    [34.77424460929712,-1.63696947207084],
    [34.78806731630351,-1.673740095519786],
    [34.843525731781575,-1.725710056911823],
    [34.787887688424256,-1.80241009315232],
    [34.68234233656023,-1.92172169537964],
];
var polyline = L.polyline(lineCoordinates, { color: 'black', weight: 5 }).addTo(map);
var nouvelleLigneCoordinates = [
  [35.54617, -0.45092],
  [35.5176, -0.3942],
  [35.465, -0.3854],
  [35.4367, -0.4098],
  [35.36235, -0.50765],
  [35.3123, -0.5545],
  [35.2789, -0.5850],
  [35.217, -0.6563],
  [35.1208, -0.7235],
  [35.0852, -0.7588],
  [35.0598, -0.7922],
  [35.0107, -0.8867],
  [34.9937, -0.9426],
  [34.9937, -0.9426],
  [34.9763, -0.9816],
  [34.9731, -1.0476],
  [35.0061, -1.1616],
  [35.0061, -1.1966],
  [34.9451, -1.1966],
  [34.8878, -1.2677],
  [34.8828, -1.3025], // INTERSECTION GARE DE TLEMCEN
  [34.8713, -1.3823],
  [34.9, -1.38],
  [34.858, -1.468],
  [34.82705, -1.51568],
  [34.81467, -1.530813],
  [34.7984, -1.57626],
  [34.79335, -1.58606],
  [34.7723, -1.6209], // INTERSECTION
  [34.7707, -1.6424], // INTERSECTION
  [34.7727, -1.6489], // INTERSECTION
  [34.7802, -1.6625], // INTERSECTION
  [34.7865, -1.6726],
  [34.8018, -1.698],
  [34.8347, -1.7128],
  [34.84292, -1.72818],
  [34.8198, -1.763],
  [34.79943, -1.79242],
  [34.7891, -1.80262],
  [34.78502, -1.80768]
];
var Newpolyline = L.polyline(nouvelleLigneCoordinates, { color: 'red', weight: 5 });
Newpolyline.addTo(map);  
//colors
const PrimaryColor = 'gold'
const FillColor = 'rgba(255, 230, 0, 0.765)'
//icons
var GarsIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
var HalteIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
var StationIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
var PontIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
var PontIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
var ViaducIcon = L.icon({
iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
var TunnelIcon = L.icon({
iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
iconSize: [15, 25],
    iconAnchor:   [7, 24],
});
// Places Data
const PontsData = [
    {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526d4"
        },
        "wkt_geom": "Point (-0.54359583110417253 35.5715658636021459)",
        "Nom": "Pont de 8m d'ouverture",
        "Type": "Pont",
        "Longeur": 8,
        "Nom Oued": "Oued Ghdel",
        "Ligne": "Oran a Ste Barbe de tlelat",
        "Section": "Valmy a Arbal",
        "Commune": "ElKarma",
        "Wilaya": "Oran",
        "Code-Commu": 3117,
        "Code-Wilay": 31,
        "PositionKi": "403k.601m,36",
        "LongitudeX": -0.543595831,
        "LattitudeY": 35.57156586,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526d5"
        },
        "wkt_geom": "Point (-0.70901390782157125 35.13519558286213851)",
        "Nom": "PM de 7 m avec tablier metallique sur Oued Tissaf(Mouzen)",
        "Type": "Pont Metallique",
        "Longeur": 7,
        "Nom Oued": "Oued Mouzen",
        "Ligne": "Sidi-Bel-Abbes a Tabia",
        "Section": "Detrie-Palissy",
        "Commune": "Sidi-Khaled",
        "Wilaya": "Sidi-Bel-Abbas",
        "Code-Commu": 227,
        "Code-Wilay": 22,
        "PositionKi": "61k.320m,00",
        "LongitudeX": -0.709013908,
        "LattitudeY": 35.13519558,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526d6"
        },
        "wkt_geom": "Point (-0.89339036968350349 34.95325748006434452)",
        "Nom": "PM de 02 m",
        "Type": "Pont metallique",
        "Longeur": 2,
        "Nom Oued": "Sur Chemin",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Taffaman a Descartes",
        "Commune": "BenBadis",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2245,
        "Code-Wilay": 22,
        "PositionKi": "90k.561m,40",
        "LongitudeX": -0.89339037,
        "LattitudeY": 34.95325748,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526d7"
        },
        "wkt_geom": "Point (-0.9076522486667632 34.93759409776417613)",
        "Nom": "PM de 02 m servant de passage, sur ravine",
        "Type": "Pont metallique",
        "Longeur": 2,
        "Nom Oued": "sur ravine",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Taffaman a Descartes",
        "Commune": "BenBadis",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2245,
        "Code-Wilay": 22,
        "PositionKi": "93k.297m,30",
        "LongitudeX": -0.907652249,
        "LattitudeY": 34.9375941,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526d8"
        },
        "wkt_geom": "Point (-0.54565822781700679 35.30747207065781623)",
        "Nom": "Pont de 6 m sur l?Oued Trahar",
        "Type": "Pont",
        "Longeur": 0,
        "Nom Oued": "Oued Trahar",
        "Ligne": "Tlelat a Sidi Bel Abess",
        "Section": "OImbert-Les trembles",
        "Commune": "Sidi-Hamadouche",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2241,
        "Code-Wilay": 22,
        "PositionKi": "35k.600m,30",
        "LongitudeX": -0.545658228,
        "LattitudeY": 35.30747207,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526d9"
        },
        "wkt_geom": "Point (-0.55123357444156995 35.30147418412153826)",
        "Nom": "PM de 10 m, sur l'Oued Sarno",
        "Type": "Pont Metallique",
        "Longeur": 10,
        "Nom Oued": "Oued Sarno",
        "Ligne": "Tlelat a Sidi Bel Abess",
        "Section": "Les trembles-Prudon",
        "Commune": "Sidi-Hamadouche",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2241,
        "Code-Wilay": 22,
        "PositionKi": "36k.430m,95",
        "LongitudeX": -0.551233574,
        "LattitudeY": 35.30147418,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526da"
        },
        "wkt_geom": "Point (-0.76015623439947988 35.00818722537674432)",
        "Nom": "PM de 6 m",
        "Type": "Pont metallique",
        "Longeur": 6,
        "Nom Oued": "Ziffilis",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Tabia-Taffaman",
        "Commune": "Tabia",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2221,
        "Code-Wilay": 22,
        "PositionKi": "78k.240m,20",
        "LongitudeX": -0.760156234,
        "LattitudeY": 35.00818723,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526db"
        },
        "wkt_geom": "Point (-0.42007179215619084 35.43763264631860466)",
        "Nom": "PM de 10 m sur l'Oued Tlelat",
        "Type": "Pont Metallique",
        "Longeur": 10,
        "Nom Oued": "Oued Tlelat",
        "Ligne": "Tlelat a Sidi Bel Abess",
        "Section": "Lauriers Roses a Oued Imbert",
        "Commune": "Makedra",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2216,
        "Code-Wilay": 22,
        "PositionKi": "15k.957m,10",
        "LongitudeX": -0.420071792,
        "LattitudeY": 35.43763265,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526dc"
        },
        "wkt_geom": "Point (-0.70281401930206511 35.14579325531936149)",
        "Nom": "PM de 14 m a tablier metallique sur l'oued Mekerra a poutre metallique",
        "Type": "Pont Metallique",
        "Longeur": 4,
        "Nom Oued": "Oued Mekerra",
        "Ligne": "Sidi-Bel-Abbes a Tabia",
        "Section": "Sidi-Lahcen a Sidi-Khaled",
        "Commune": "Sidi-Lahcen",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2214,
        "Code-Wilay": 22,
        "PositionKi": "59k.950m,00",
        "LongitudeX": -0.702814019,
        "LattitudeY": 35.14579326,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526dd"
        },
        "wkt_geom": "Point (-0.70849428602919207 35.13802683321462439)",
        "Nom": "PM de 15 m de longueur",
        "Type": "Pont metallique",
        "Longeur": 15,
        "Nom Oued": "",
        "Ligne": "Sidi-Bel-Abbes a Tabia",
        "Section": "Detrie-Palissy",
        "Commune": "Sidi-Lahcen",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2214,
        "Code-Wilay": 22,
        "PositionKi": "60k.840m,00",
        "LongitudeX": -0.708494286,
        "LattitudeY": 35.13802683,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526de"
        },
        "wkt_geom": "Point (-0.8556358531247128 34.96541428828276565)",
        "Nom": "PM de 04 m sur l'Oued Taffaman",
        "Type": "Pont Metallique",
        "Longeur": 4,
        "Nom Oued": "Oued Taffaman",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Tabia-TafaminTassin",
        "Commune": "BedrabineElMokrani",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2209,
        "Code-Wilay": 22,
        "PositionKi": "87k.128m,30",
        "LongitudeX": -0.855635853,
        "LattitudeY": 34.96541429,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526df"
        },
        "wkt_geom": "Point (-0.8372646966033549 34.97380240569511045)",
        "Nom": "PM de 4 m",
        "Type": "Pont Metallique",
        "Longeur": 4,
        "Nom Oued": "Oued Tessa",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Tabia-TafaminTassin",
        "Commune": "BedrabineElMokrani",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2209,
        "Code-Wilay": 22,
        "PositionKi": "85k.384m,10",
        "LongitudeX": -0.837264697,
        "LattitudeY": 34.97380241,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e0"
        },
        "wkt_geom": "Point (-0.73592099570237279 35.04588379819676902)",
        "Nom": "Pont de 2m",
        "Type": "Pont",
        "Longeur": 2,
        "Nom Oued": "Sur Chemin",
        "Ligne": "Sidi-Bel-Abbes a Tabia",
        "Section": "Boukanefis-Tabia",
        "Commune": "Boukanefis",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2207,
        "Code-Wilay": 22,
        "PositionKi": "71k.100m,00",
        "LongitudeX": -0.735920996,
        "LattitudeY": 35.0458838,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e1"
        },
        "wkt_geom": "Point (-0.65681969479762214 35.18822760157778617)",
        "Nom": "PM de 12 m sur l'oued Mekerra a poutre metallique",
        "Type": "Pont metallique",
        "Longeur": 12,
        "Nom Oued": "Oued Mekerra",
        "Ligne": "Sidi-Bel-Abbes a Tabia",
        "Section": "Sidi-Bel-Abbes a Sidi Lahcen(Detrie)",
        "Commune": "Sidi-Bel-Abbes",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2201,
        "Code-Wilay": 22,
        "PositionKi": "53k.600m,00",
        "LongitudeX": -0.656819695,
        "LattitudeY": 35.1882276,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e2"
        },
        "wkt_geom": "Point (-0.648580852178961 35.19396786819114453)",
        "Nom": "PM de 10 m de longueur",
        "Type": "Pont metallique",
        "Longeur": 10,
        "Nom Oued": "Sur Chemin",
        "Ligne": "Sidi-Bel-Abbes a Tabia",
        "Section": "Sidi-Bel-Abbes-Sidi-Lahcen",
        "Commune": "Sidi-Bel-Abbes",
        "Wilaya": "Sidi-Bel-Abbes",
        "Code-Commu": 2201,
        "Code-Wilay": 22,
        "PositionKi": "52k.940m,00",
        "LongitudeX": -0.648580852,
        "LattitudeY": 35.19396787,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e3"
        },
        "wkt_geom": "Point (-1.58151654252834617 34.79290007729398582)",
        "Nom": "Viaduc en maconnerie de 116m,876 de longeur en 6 arches de 15 m d'ouverture",
        "Type": "Viaduc en maconnerie",
        "Longeur": 116.876,
        "Nom Oued": "Oued Ksab",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Turenne-SidiMedjahed",
        "Commune": "Bouhlou",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1347,
        "Code-Wilay": 13,
        "PositionKi": "175k.516m,11",
        "LongitudeX": -1.581516543,
        "LattitudeY": 34.79290008,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e4"
        },
        "wkt_geom": "Point (-1.66061639384628434 34.78023178574908059)",
        "Nom": "Viaduc de 182m.20 en 4 travees sur l'Oued Tralimet",
        "Type": "Viaduc metallique",
        "Longeur": 182.2,
        "Nom Oued": "Oued Tralimet",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "SidiMedjahed-Tralimet",
        "Commune": "Sidi Medjahed",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1337,
        "Code-Wilay": 13,
        "PositionKi": "187k.456m,19",
        "LongitudeX": -1.660616394,
        "LattitudeY": 34.78023179,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e5"
        },
        "wkt_geom": "Point (-1.64024358264692638 34.77192215194033054)",
        "Nom": "Viaduc de 117m.39 en 3 travees sur l'Oued Ouaame dit sidi medjaheb",
        "Type": "Viaduc metallique",
        "Longeur": 117.39,
        "Nom Oued": "Oued Ouaame dit -sidi-medjaheb",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "SidiMedjahed-Tralimet",
        "Commune": "Sidi Me`djahed",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1337,
        "Code-Wilay": 13,
        "PositionKi": "184k.652m,04",
        "LongitudeX": -1.640243583,
        "LattitudeY": 34.77192215,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e6"
        },
        "wkt_geom": "Point (-1.63225722941715601 34.77954505778129857)",
        "Nom": "Viaduc de 145m,20 en 3 travees sur oued Tafna",
        "Type": "Viaduc metallique",
        "Longeur": 145.2,
        "Nom Oued": "Oued Tafna",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Turenne-SidiMedjahed",
        "Commune": "Sidi Medjahed",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1337,
        "Code-Wilay": 13,
        "PositionKi": "183k.457m,19",
        "LongitudeX": -1.632257229,
        "LattitudeY": 34.77954506,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e7"
        },
        "wkt_geom": "Point (-1.67722137772221402 34.79964455086203401)",
        "Nom": "PM de 4 m, sur Chabet El Moussa ben Brahim",
        "Type": "Pont metallique",
        "Longeur": 4,
        "Nom Oued": "Chabet El Moussa ben Brahim",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Tralimet-Marnia",
        "Commune": "Sidi Medjahed",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1337,
        "Code-Wilay": 13,
        "PositionKi": "190k.542m,84",
        "LongitudeX": -1.677221378,
        "LattitudeY": 34.79964455,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e8"
        },
        "wkt_geom": "Point (-1.72921361940795859 34.84343617338056731)",
        "Nom": "PM de 35m d'ouverture sur l'Oued Aounia (Attchane)",
        "Type": "Viaduc metallique",
        "Longeur": 35,
        "Nom Oued": "Oued Aounia",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Marnia-F.Maroc",
        "Commune": "Maghnia",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1327,
        "Code-Wilay": 13,
        "PositionKi": "198k.208m,34",
        "LongitudeX": -1.729213619,
        "LattitudeY": 34.84343617,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526e9"
        },
        "wkt_geom": "Point (-1.71355814245683424 34.83723289873434936)",
        "Nom": "PM de 22m sur l'Oued Abbes",
        "Type": "Viaduc metallique",
        "Longeur": 22,
        "Nom Oued": "Oued Abbes",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Tralimet-Marnia",
        "Commune": "Maghnia",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1327,
        "Code-Wilay": 13,
        "PositionKi": "196k.694m,04",
        "LongitudeX": -1.713558142,
        "LattitudeY": 34.8372329,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526ea"
        },
        "wkt_geom": "Point (-1.77057187804343652 34.81527730625828809)",
        "Nom": "PM de 4 m",
        "Type": "Pont metallique",
        "Longeur": 4,
        "Nom Oued": "",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Marnia-F.Maroc",
        "Commune": "Maghnia",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1327,
        "Code-Wilay": 13,
        "PositionKi": "203k.701m,06",
        "LongitudeX": -1.770571878,
        "LattitudeY": 34.81527731,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526eb"
        },
        "wkt_geom": "Point (-1.77845157231000828 34.8087297622474523)",
        "Nom": "PM de 10 m",
        "Type": "Pont metallique",
        "Longeur": 10,
        "Nom Oued": "",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Marnia-F.Maroc",
        "Commune": "Maghnia",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1327,
        "Code-Wilay": 13,
        "PositionKi": "204k.843m,64",
        "LongitudeX": -1.778451572,
        "LattitudeY": 34.80872976,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526ec"
        },
        "wkt_geom": "Point (-1.78843992727282108 34.80129440752298819)",
        "Nom": "PM de 3 m",
        "Type": "Pont metallique",
        "Longeur": 3,
        "Nom Oued": "",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Marnia-F.Maroc",
        "Commune": "Maghnia",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1327,
        "Code-Wilay": 13,
        "PositionKi": "205k.816m,34",
        "LongitudeX": -1.788439927,
        "LattitudeY": 34.80129441,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526ed"
        },
        "wkt_geom": "Point (-1.03007987432219483 34.90184889476628172)",
        "Nom": "Pont a Tablier metallique de 30 m de longueur, sur l'Oued Isser.",
        "Type": "Pont metallique",
        "Longeur": 30,
        "Nom Oued": "Oued Isser",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Lamoriciere a Oued Chouly",
        "Commune": "Ouled Mimoun",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1313,
        "Code-Wilay": 13,
        "PositionKi": "107k.423m,68",
        "LongitudeX": -1.030079874,
        "LattitudeY": 34.90184889,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526ee"
        },
        "wkt_geom": "Point (-0.99170569037509693 34.91214797284208515)",
        "Nom": "Pont biais de 4 m sur Oued el Golea",
        "Type": "Pont",
        "Longeur": 4,
        "Nom Oued": "Oued el Golea",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Ain TTellout a Lamoriciere",
        "Commune": "Ouled Mimoun",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1313,
        "Code-Wilay": 13,
        "PositionKi": "103k.892m,75",
        "LongitudeX": -0.99170569,
        "LattitudeY": 34.91214797,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526ef"
        },
        "wkt_geom": "Point (-1.01802170777654943 34.90439833711479167)",
        "Nom": "PM de 3 m de longueur, sur Ravin",
        "Type": "Pont metallique",
        "Longeur": 3,
        "Nom Oued": "Ravin",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Ain TTellout a Lamoriciere",
        "Commune": "Ouled Mimoun",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1313,
        "Code-Wilay": 13,
        "PositionKi": "106k.222m,70",
        "LongitudeX": -1.018021708,
        "LattitudeY": 34.90439834,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f0"
        },
        "wkt_geom": "Point (-1.24719744171821367 34.87564161788476724)",
        "Nom": "PM de 6 m sur Ravin Torrent",
        "Type": "Pont metallique",
        "Longeur": 25,
        "Nom Oued": "ravin Torrent",
        "Ligne": "Tabia a Tlemcen",
        "Section": "AinFezza-Tlemcen",
        "Commune": "Ain Fezza",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1312,
        "Code-Wilay": 13,
        "PositionKi": "132k.858m,10",
        "LongitudeX": -1.247197442,
        "LattitudeY": 34.87564162,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f1"
        },
        "wkt_geom": "Point (-1.23301045980453639 34.8763007646586658)",
        "Nom": "PM de 6 m de longueur",
        "Type": "Pont metallique",
        "Longeur": 6,
        "Nom Oued": "",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Oued Chouly Ain Fezza",
        "Commune": "Ain Fezza",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1312,
        "Code-Wilay": 13,
        "PositionKi": "128k.635m,99",
        "LongitudeX": -1.23301046,
        "LattitudeY": 34.87630076,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f2"
        },
        "wkt_geom": "Point (-1.17245865639377267 34.8684007630195012)",
        "Nom": "PM de 4 m de longueur, sur Chabet m'tah melk",
        "Type": "Pont metallique",
        "Longeur": 4,
        "Nom Oued": "Chabet m?tah melk",
        "Ligne": "Tabia a Tlemcen",
        "Section": "OuedChouly-Ain Fezza",
        "Commune": "Ain Fezza",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1312,
        "Code-Wilay": 13,
        "PositionKi": "122k.121m,20",
        "LongitudeX": -1.172458656,
        "LattitudeY": 34.86840076,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "PM<20m"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f3"
        },
        "wkt_geom": "Point (-1.13523110988984599 34.86668283671350821)",
        "Nom": "Pont sur l'Oued Chouly a 3 arches de 18 m d'ouverture",
        "Type": "Viaduc en maconnerie",
        "Longeur": 65,
        "Nom Oued": "Oued Chouly",
        "Ligne": "Tabia a Tlemcen",
        "Section": "OuedChouly-Ain Fezza",
        "Commune": "Oued Chouly",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1311,
        "Code-Wilay": 13,
        "PositionKi": "118k.420m,30",
        "LongitudeX": -1.13523111,
        "LattitudeY": 34.86668284,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f4"
        },
        "wkt_geom": "Point (-1.12883756463120322 34.87099809964809083)",
        "Nom": "PMde 74 m de longueur a 3 travees",
        "Type": "Viaduc metallique",
        "Longeur": 74,
        "Nom Oued": "ChabetEl Kebir",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Lamoriciere -OuedChouly",
        "Commune": "Oued Chouly",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1311,
        "Code-Wilay": 13,
        "PositionKi": "117k.664m,58",
        "LongitudeX": -1.128837565,
        "LattitudeY": 34.8709981,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f5"
        },
        "wkt_geom": "Point (-1.50336418235394453 34.82754891686199983)",
        "Nom": "Viaduc de 110m en 3 travees sur l'oued Afair",
        "Type": "Viaduc metallique",
        "Longeur": 110,
        "Nom Oued": "Oued Afair",
        "Ligne": "Tlemcen-F.Maroc",
        "Section": "Tlemcen-Turenne",
        "Commune": "Sabra",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1306,
        "Code-Wilay": 13,
        "PositionKi": "166k.350m,85",
        "LongitudeX": -1.503364182,
        "LattitudeY": 34.82754892,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f6"
        },
        "wkt_geom": "Point (-0.95869970659194481 34.92874853208834907)",
        "Nom": "Viaduc sur l'Oued Ain Tellout de 115m.30 d'ouverture a 8 arches de 10m",
        "Type": "maconnerie",
        "Longeur": 115.3,
        "Nom Oued": "Oued Tellout",
        "Ligne": "Tabia a Tlemcen",
        "Section": "Ain tellout-Lamoriciere",
        "Commune": "AinTallout",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1303,
        "Code-Wilay": 13,
        "PositionKi": "98k.498m,00",
        "LongitudeX": -0.958699707,
        "LattitudeY": 34.92874853,
        "FicheInven": "",
        "PhotoIdent": "",
        "Categorie": "Viaduc"
      },
      {
        "_id": {
          "$oid": "6514384c30fcfbf7a57526f7"
        },
        "wkt_geom": "Point (-1.26896723856949212 34.8607291195644251)",
        "Nom": "Viaduc metallique en Arc de 68 m d'ouverture sur l'oued Saf-Saf",
        "Type": "Pont Metallique en Arc",
        "Longeur": 68,
        "Nom Oued": "Oued Safsaf",
        "Ligne": "Tabia a Tlemcen",
        "Section": "AinFezza-Tlemcen",
        "Commune": "Tlemcen",
        "Wilaya": "Tlemcen",
        "Code-Commu": 1301,
        "Code-Wilay": 13,
        "PositionKi": "133k.253m,30",
        "LongitudeX": -1.268967239,
        "LattitudeY": 34.86072912,
        "FicheInven": "D:\\TAROTCOD 2020\\R�daction\\Th�se\\Th�se inchallah\\1e V th�se\\3e Partie Architecture des gare f O.FM\\Maping\\Cartographie O.A\\logiciel\\QGIS G�or�ferencement\\Qgis OA\\Inventaire O.FM\\Inventaire Ouvrages d'art\\Fiche Inventaire Pont d'El Ourit.docx",
        "PhotoIdent": "D:\\TAROTCOD 2020\\R�daction\\Th�se\\Th�se inchallah\\1e V th�se\\3e Partie Architecture des gare f O.FM\\Maping\\Cartographie O.A\\logiciel\\QGIS G�or�ferencement\\Qgis OA\\PhotosGares Oran-F.du.Marco\\Pont El Ourit.jpg",
        "Categorie": "Viaduc"
}]
const GarsData = [{
    "_id": {
      "$oid": "64870747f4705307bba4910c"
    },
    "wkt_geom": "Point (-0.63893611253705607 35.69816801454017963)",
    "Type": "Gare Terminus",
    "wilaya": "Oran",
    "Ancien_Nom": "Gare de Karguentah",
    "Dispositio": "En U",
    "Code_Wilay": 31,
    "Code_Commu": 3101,
    "Commune": "Oran",
    "PositionKm": "421k.245m,00",
    "M_Oeuvre": "Albert Ballut (Architecte)",
    "LigneFerro": "Oran_Tlélat",
    "StyleArchi": "Néo-Mauresque",
    "Date_Const": "01-01-1868",
    "Date_Recon": "1912-1913",
    "Cie_Ferrov": "P.L.M",
    "Etat_Actu": "Fonctionnel",
    "LattitudeY": "35.69873978861225",
    "LongitudeX": "-0.638246122889966",
    "Nom": "Gare d'Oran"
  },
  {
    "_id": {
      "$oid": "64870747f4705307bba49116"
    },
    "wkt_geom": "Point (-0.63839096525188599 35.19929255061203577)",
    "Type": "Gare Terminus",
    "wilaya": "Sidi-Bel-Abbes",
    "Ancien_Nom": "Gare_de_Sidi-Bel-Abbes",
    "Dispositio": "Latérale",
    "Code_Wilay": 22,
    "Code_Commu": 2201,
    "Commune": "Sidi-Bel-Abbes",
    "PositionKm": "51k.572m,60",
    "M_Oeuvre": "MM.Wybo et Lagrange(Architecte)",
    "LigneFerro": "Tlélat_Sidi Bel Abbes",
    "StyleArchi": "Moderne(Art déco)",
    "Date_Const": "03.05.1877",
    "Date_Recon": "11.08.1932",
    "Cie_Ferrov": "Cie O.A Puis P.L.M",
    "Etat_Actu": "Fonctionnel",
    "LattitudeY": "35.19818878238979",
    "LongitudeX": "-0.638986240747964",
    "Nom": "Gare de Sidi Bel Abbès"
  },
  {
    "_id": {
      "$oid": "64870747f4705307bba49121"
    },
    "wkt_geom": "Point (-1.3011123591539373 34.88508891000836343)",
    "Type": "Gare Terminus",
    "wilaya": "Tlemcen",
    "Ancien_Nom": "Gare de Tlemcen",
    "Dispositio": "Latérale",
    "Code_Wilay": 13,
    "Code_Commu": 1301,
    "Commune": "Tlemcen",
    "PositionKm": "138k.660m,33",
    "M_Oeuvre": "Mr Clerc (Ingénieur)",
    "LigneFerro": "Tabia-Tlemcen",
    "StyleArchi": "Néo-Mauresque",
    "Date_Const": "15.04.1890",
    "Date_Recon": "03.04.1957(Modernis)",
    "Cie_Ferrov": "Cie O.A Puis C.F.A",
    "Etat_Actu": "Fonctionnel",
    "LattitudeY": "34.8838884782675",
    "LongitudeX": "-1.29996700832521",
    "Nom": "Gare_de_Tlemcen"
  },
  {
    "_id": {
      "$oid": "64870747f4705307bba49128"
    },
    "wkt_geom": "Point (-1.72685353425828181 34.84283384761207003)",
    "Type": "Gare Terminus",
    "wilaya": "Tlemcen",
    "Ancien_Nom": "Marnia",
    "Dispositio": "Latérale",
    "Code_Wilay": 13,
    "Code_Commu": 1327,
    "Commune": "MAGHNIA",
    "PositionKm": "197k.906m,84",
    "LigneFerro": "Tlemcen-F.du Maroc",
    "StyleArchi": "Néo-Classique",
    "Date_Recon": "Non Reconstruite",
    "Cie_Ferrov": "Cie O.A",
    "Etat_Actu": "Fonctionnel",
    "LattitudeY": "34.843525731781575",
    "LongitudeX": "-1.725710056911823",
    "Nom": "Maghnia"
  },
  {
    "_id": {
      "$oid": "64870747f4705307bba4912a"
    },
    "wkt_geom": "Point (-1.92172169537963966 34.68234233656023235)",
    "Type": "Gare Terminus",
    "wilaya": "Oujda(Maroc)",
    "Ancien_Nom": "Gare d'Oujda",
    "Dispositio": "Latérale",
    "Code_Wilay": 0,
    "Code_Commu": 0,
    "Commune": "Oujda",
    "PositionKm": "222k.093m,79",
    "LigneFerro": "Tlemcen-F.du Maroc",
    "StyleArchi": "Néo-Mauresque",
    "Date_Const": 1916,
    "Date_Recon": 1928,
    "Etat_Actu": "Fonctionnel",
    "LattitudeY": "34.68234233656023",
    "LongitudeX": "-1.92172169537964",
    "Nom": "Nouvelle Gare Oujda"
}]
const StationsData = [
    {
      "_id": {
        "$oid": "64870747f4705307bba4910d"
      },
      "wkt_geom": "Point (-0.60769849269308196 35.65000888380816235)",
      "Type": "Station Intermediaire",
      "wilaya": "Oran",
      "Ancien_Nom": "Sénia",
      "Dispositio": "Latérale",
      "Code_Wilay": 31,
      "Code_Commu": 3105,
      "Commune": "Oran",
      "PositionKm": "415k.094m,97",
      "LigneFerro": "Oran_Tlélat",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "35.6513070936874",
      "LongitudeX": "-0.607681997218178",
      "Nom": "Es Sénia"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4910e"
      },
      "wkt_geom": "Point (-0.58713086677529236 35.6207857510590955)",
      "Type": "Station Intermediaire",
      "wilaya": "Oran",
      "Ancien_Nom": "Valmy",
      "Dispositio": "Latérale",
      "Code_Wilay": 31,
      "Code_Commu": 3117,
      "Commune": "EL KARMA",
      "PositionKm": "410k.887m,00",
      "LigneFerro": "Oran_Tlélat",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "?",
      "Remarque": "El Kerma ou abondonner",
      "LattitudeY": "35.620785751059096",
      "LongitudeX": "-0.587130866775292",
      "Nom": "Valmy"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4910f"
      },
      "wkt_geom": "Point (-0.5427092655726744 35.57118993751440428)",
      "Type": "Station Intermediaire",
      "wilaya": "Oran",
      "Ancien_Nom": "Arbal",
      "Dispositio": "Latérale",
      "Code_Wilay": 31,
      "Code_Commu": 3117,
      "Commune": "EL KARMA",
      "PositionKm": "403k.103m,59",
      "LigneFerro": "Oran_Tlélat",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "?",
      "Remarque": "El Kerma ou abondonner",
      "LattitudeY": "35.571189937514404",
      "LongitudeX": "-0.542709265572674",
      "Nom": "Arbal"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49110"
      },
      "wkt_geom": "Point (-0.45187791345075523 35.54640802694567014)",
      "Type": "Station Intermediaire",
      "wilaya": "Oran",
      "Ancien_Nom": "Ste Barbe de Tlélat",
      "Dispositio": "Latérale",
      "Code_Wilay": 31,
      "Code_Commu": 3111,
      "Commune": "OUED TLELAT",
      "PositionKm": "394k.903m,67 0k.000m,00",
      "LigneFerro": "Oran_Tlélat",
      "StyleArchi": "Néo-Classique",
      "Date_Const": 1868,
      "Cie_Ferrov": "P.L.M",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "35.54640802694567",
      "LongitudeX": "-0.451877913450755",
      "Nom": "Oued Tlélat"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49111"
      },
      "wkt_geom": "Point (-0.40946118191229225 35.51251325759334065)",
      "Type": "Station Intermediaire",
      "wilaya": "Mascara",
      "Ancien_Nom": "St Lucien",
      "Dispositio": "Latérale",
      "Code_Wilay": 29,
      "Code_Commu": 2930,
      "Commune": "ZAHANA",
      "PositionKm": "5k.698m,22",
      "LigneFerro": "Tlélat_Sidi Bel Abbes",
      "StyleArchi": "Néo-Classique",
      "Date_Const": 1877,
      "Etat_Actu": "Fonctionnel",
      "Remarque": "j'ai ecrit foctionnel mais si c devenu un simple arret donc le batiment est abondoné ou occupéparqui",
      "LattitudeY": "35.51251325759334",
      "LongitudeX": "-0.409461181912292",
      "Nom": "Zahana"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49112"
      },
      "wkt_geom": "Point (-0.39497100200469798 35.46468716752257677)",
      "Type": "Station Intermediaire",
      "wilaya": "Mascara",
      "Ancien_Nom": "Lauriers Roses",
      "Dispositio": "Latérale",
      "Code_Wilay": 29,
      "Code_Commu": 2930,
      "Commune": "ZAHANA",
      "PositionKm": "15k.402m,80",
      "LigneFerro": "Tlélat_Sidi Bel Abbes",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "?",
      "Remarque": "Djeniene Meskine ou Ouled Ali une est celle de Laurier rose une est nouvellement cree",
      "LattitudeY": "35.46468716752258",
      "LongitudeX": "-0.394971002004698",
      "Nom": "Lauriers Roses"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49113"
      },
      "wkt_geom": "Point (-0.50981028250652405 35.36335514696350657)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Oued Imbert",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2228,
      "Commune": "AIN EL BERD",
      "PositionKm": "28k.317m,60",
      "LigneFerro": "Tlélat_Sidi Bel Abbes",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "35.36335514696351",
      "LongitudeX": "-0.509810282506524",
      "Nom": "Ain El Berd"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49114"
      },
      "wkt_geom": "Point (-0.54812608960179698 35.30571864597985865)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Les Trembles",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2241,
      "Commune": "SIDI HAMADOUCHE",
      "PositionKm": "35k.886m,89",
      "LigneFerro": "Tlélat_Sidi Bel Abbes",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "?",
      "Remarque": "Abondoné ?",
      "LattitudeY": "35.30571864597986",
      "LongitudeX": "-0.548126089601797",
      "Nom": "Sidi Hamadouche"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49115"
      },
      "wkt_geom": "Point (-0.56834166677622899 35.26149489478149945)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Prudon",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2203,
      "Commune": "SIDI BRAHIM",
      "PositionKm": "41k.337m,60",
      "LigneFerro": "Tlélat_Sidi Bel Abbes",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "35.2614948947815",
      "LongitudeX": "-0.568341666776229",
      "Nom": "Sidi Brahim"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49117"
      },
      "wkt_geom": "Point (-0.68912523536161474 35.1625603786315466)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Détrie",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2214,
      "Commune": "SIDI LAHCENE",
      "PositionKm": "57k.746m,95",
      "LigneFerro": "Sidi Bel Abbes_Tabia",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "Remarque": "Abondoné ? le nom de station n'existe pas dans la liste du voyage aujourdhui(Train Normal)halte?",
      "LattitudeY": "35.164151645081716",
      "LongitudeX": "-0.687870932839916",
      "Nom": "Sidi Lahcen"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49118"
      },
      "wkt_geom": "Point (-0.71489160261540341 35.11254620982445829)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Palissy",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2227,
      "Commune": "SIDI KHALED",
      "PositionKm": "63k.835m,20",
      "LigneFerro": "Sidi Bel Abbes_Tabia",
      "StyleArchi": "Néo-Classique",
      "Remarque": "Abondoné ?",
      "LattitudeY": "35.11254620982446",
      "LongitudeX": "-0.714891602615403",
      "Nom": "Sidi Khaled"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49119"
      },
      "wkt_geom": "Point (-0.72483127754369425 35.05908450831036305)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Boukaneifis",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2207,
      "Commune": "BOUKANEFIS",
      "PositionKm": "70k.601m,15",
      "LigneFerro": "Sidi Bel Abbes_Tabia",
      "StyleArchi": "Néo-Classique",
      "Date_Const": 1883,
      "Remarque": "Abondoné ?",
      "LattitudeY": "35.05908450831036",
      "LongitudeX": "-0.724831277543694",
      "Nom": "Bouchabka"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4911a"
      },
      "wkt_geom": "Point (-0.74283796377147682 35.02205588493930577)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Tabia",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2221,
      "Commune": "TABIA",
      "PositionKm": "74k.882m,60",
      "LigneFerro": "Sidi Bel Abbes_Tabia",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "35.02105796173658",
      "LongitudeX": "-0.74320176925427",
      "Nom": "Tabia"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4911b"
      },
      "wkt_geom": "Point (-0.85973237650640599 34.96313968410208162)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Taffamin Tassin",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2209,
      "Commune": "BEDRABINE EL MOKRANI",
      "PositionKm": "87k.583m,20",
      "LigneFerro": "Tabia-Tlemcen",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Abondonner",
      "Remarque": "Abondoné ?",
      "LattitudeY": "34.96313968410208",
      "LongitudeX": "-0.859732376506406",
      "Nom": "Tffamin Tassin"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4911c"
      },
      "wkt_geom": "Point (-0.91449349449164685 34.9332974551129638)",
      "Type": "Station Intermediaire",
      "wilaya": "Sidi-Bel-Abbes",
      "Ancien_Nom": "Descartes",
      "Dispositio": "Latérale",
      "Code_Wilay": 22,
      "Code_Commu": 2245,
      "Commune": "BEN BADIS",
      "PositionKm": "94k.017m,00",
      "LigneFerro": "Tabia-Tlemcen",
      "StyleArchi": "Néo-Classique",
      "Remarque": "Abondoné ?",
      "LattitudeY": "34.933297455112964",
      "LongitudeX": "-0.914493494491647",
      "Nom": "Ben Badis"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4911d"
      },
      "wkt_geom": "Point (-0.9567161999884477 34.92979110325242686)",
      "Type": "Station Intermediaire",
      "wilaya": "Tlemcen",
      "Ancien_Nom": "Ain Tellout",
      "Dispositio": "Latérale",
      "Code_Wilay": 13,
      "Code_Commu": 1303,
      "Commune": "AIN TALLOUT",
      "PositionKm": "98k.302m,00",
      "LigneFerro": "Tabia-Tlemcen",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "34.929732683452066",
      "LongitudeX": "-0.956618569601194",
      "Nom": "Ain Tellout"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba4911e"
      },
      "wkt_geom": "Point (-1.02718114327710874 34.90240554127300499)",
      "Type": "Station Intermediaire",
      "wilaya": "Tlemcen",
      "Ancien_Nom": "Lamoriciere",
      "Dispositio": "Latérale",
      "Code_Wilay": 13,
      "Code_Commu": 1313,
      "Commune": "OULED MIMOUN",
      "PositionKm": "107k.011m,00",
      "LigneFerro": "Tabia-Tlemcen",
      "StyleArchi": "Néo-Classique",
      "Date_Const": 1888,
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "34.9025044549154",
      "LongitudeX": "-1.026417210924172",
      "Nom": "Ouled Mimoun"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49124"
      },
      "wkt_geom": "Point (-1.43286517844088745 34.8554386722435936)",
      "Type": "Station Intermediaire",
      "wilaya": "Tlemcen",
      "Ancien_Nom": "Zelboune",
      "Dispositio": "Latérale",
      "Code_Wilay": 13,
      "Code_Commu": 1302,
      "Commune": "BENI MESTER",
      "PositionKm": "153k.840m,98",
      "LigneFerro": "Tlemcen-F.du Maroc",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "Remarque": "apres zelboun il a la halte de sidi ali",
      "LattitudeY": "34.85156117106218",
      "LongitudeX": "-1.438351977120567",
      "Nom": "Zelboune"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49125"
      },
      "wkt_geom": "Point (-1.52242073816958579 34.8267790303889484)",
      "Type": "Station Intermediaire",
      "wilaya": "Tlemcen",
      "Ancien_Nom": "Turenne",
      "Dispositio": "Latérale",
      "Code_Wilay": 13,
      "Code_Commu": 1306,
      "Commune": "SABRA",
      "PositionKm": "168k.235m,04",
      "LigneFerro": "Tlemcen-F.du Maroc",
      "StyleArchi": "Néo-Classique",
      "Date_Const": 1907,
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "34.82672874650801",
      "LongitudeX": "-1.522472239359875",
      "Nom": "Sebra"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49127"
      },
      "wkt_geom": "Point (-1.67374009551978564 34.78806731630351123)",
      "Type": "Station Intermediaire",
      "wilaya": "Tlemcen",
      "Ancien_Nom": "Tralimet",
      "Dispositio": "Latérale",
      "Code_Wilay": 13,
      "Code_Commu": 1337,
      "Commune": "SIDI MEDJAHED",
      "PositionKm": "189k.057m,84",
      "LigneFerro": "Tlemcen-F.du Maroc",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "34.78806731630351",
      "LongitudeX": "-1.673740095519786",
      "Nom": "Teghalimet"
    },
    {
      "_id": {
        "$oid": "64870747f4705307bba49129"
      },
      "wkt_geom": "Point (-1.80386407079910649 34.78728140890429188)",
      "Type": "Station Intermediaire",
      "wilaya": "Tlemcen",
      "Ancien_Nom": "Zoudj Béghal",
      "Dispositio": "Latérale",
      "Code_Wilay": 13,
      "Code_Commu": 1327,
      "Commune": "Maghnia",
      "PositionKm": "207k.415m,34",
      "LigneFerro": "Tlemcen-F.du Maroc",
      "StyleArchi": "Néo-Classique",
      "Etat_Actu": "Fonctionnel",
      "LattitudeY": "34.787887688424256",
      "LongitudeX": "-1.80241009315232",
      "Nom": "Akid Abbes"
    }
]
const haltesData = [
    {
        "_id": {
          "$oid": "64870747f4705307bba4911f"
        },
        "wkt_geom": "Point (-1.13127365641361455 34.86911516043487325)",
        "Type": "Halte",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Oued Chouly",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1311,
        "Commune": "OUED CHOULY",
        "PositionKm": "118k.100m,80",
        "LigneFerro": "Tabia-Tlemcen",
        "StyleArchi": "Néo-Classique",
        "Etat_Actu": "Abondonner",
        "Remarque": "esq le BV est abondonnée? vu q c devenu une halte",
        "LattitudeY": "34.86911516043487",
        "LongitudeX": "-1.131273656413615",
        "Nom": "Oued Lakhdar"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49120"
        },
        "wkt_geom": "Point (-1.2410098468695534 34.87694183471008103)",
        "Type": "Halte",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Ain Fezza",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1312,
        "Commune": "AIN FEZZA",
        "PositionKm": "129k.014m,05",
        "LigneFerro": "Tabia-Tlemcen",
        "StyleArchi": "Néo-Classique",
        "Etat_Actu": "Abondonner",
        "Remarque": "esq le BV est abondonnée? vu q c devenu une halte",
        "LattitudeY": "34.87694183471008",
        "LongitudeX": "-1.241009846869554",
        "Nom": "Ain Fezza"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49122"
        },
        "wkt_geom": "Point (-1.34261166667361453 34.8722678155660688)",
        "Type": "Halte",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Mansourah",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1351,
        "Commune": "MANSOURAH",
        "PositionKm": "143k.249m,53",
        "LigneFerro": "Tlemcen-F.du Maroc",
        "StyleArchi": "Néo-Classique",
        "Etat_Actu": "Abondonner",
        "Remarque": "Avant Mansourah il ya la halte de Pasteur Imama aujourdhuit",
        "LattitudeY": "34.87226781556607",
        "LongitudeX": "-1.342611666673615",
        "Nom": "Mansourah"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49123"
        },
        "wkt_geom": "Point (-1.40534484412529337 34.85398272162920819)",
        "Type": "Halte",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Ain Douz",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1302,
        "Commune": "BENI MESTER",
        "PositionKm": "150k.471m,59",
        "LigneFerro": "Tlemcen-F.du Maroc",
        "StyleArchi": "Néo-Classique",
        "Etat_Actu": "Abondonner",
        "LattitudeY": "34.853547776791025",
        "LongitudeX": "-1.405527702450567",
        "Nom": "Ain Douz"
      },
      {
        "_id": {
          "$oid": "64870747f4705307bba49126"
        },
        "wkt_geom": "Point (-1.63873039757245587 34.77480666528879283)",
        "Type": "Halte",
        "wilaya": "Tlemcen",
        "Ancien_Nom": "Sidi-Medjahed",
        "Dispositio": "Latérale",
        "Code_Wilay": 13,
        "Code_Commu": 1337,
        "Commune": "SIDI MEDJAHED",
        "PositionKm": "184k.274m,89",
        "LigneFerro": "Tlemcen-F.du Maroc",
        "StyleArchi": "Néo-Classique",
        "Date_Const": 1910,
        "Cie_Ferrov": "O.A",
        "Etat_Actu": "Abondonner",
        "LattitudeY": "34.77424460929712",
        "LongitudeX": "-1.63696947207084",
        "Nom": "Sidi-Medjahed"
      }
]
const ViaducsData = PontsData.filter(data => data.Categorie === "Viaduc");
const UpdatedPontsData = PontsData.filter(data => data.Categorie !== "Viaduc");
// function to add markers to the map
function addMarkersToMap(data, Icon) {
    data.forEach((JSONData) => {
        const lat = JSONData.LattitudeY;
        const lon = JSONData.LongitudeX;

        // Add a marker to show the location.
        const Place = L.marker([lat, lon], { icon: Icon }).addTo(map);
        const circle = L.circle([lat, lon], {
            color: PrimaryColor,
            fillColor: FillColor,
            fillOpacity: 0.2,
            radius: 50
        }).addTo(map);

        // Add popup message
        const id = JSONData._id.$oid;
        const template = `
          <div style="text-align:center">
            <form class="map-LocationDisplayer" method="POST" action="/places/${id}">
                <h1>${JSONData.Nom}</h1>
                <div class="Location">
                  <h2>Location:</h2>
                  <h3>${lat + ', ' + lon}</h3>
                </div>
                <input class="voir-map-btn" type="submit" value="voir"/>
            </form>
          </div>
        `;
        Place.bindPopup(template);
    });
}
function Markers(){
    addMarkersToMap(UpdatedPontsData, PontIcon)
    addMarkersToMap(ViaducsData, ViaducIcon)
    addMarkersToMap(GarsData, GarsIcon)
    addMarkersToMap(StationsData, StationIcon)
    addMarkersToMap(haltesData, HalteIcon)
}
Markers();


let addButton = document.getElementById('add-btn');
let closeButton = document.getElementById('close-class');
let mapContainer = document.querySelector('.map-container');

addButton.addEventListener('click', () => {
    mapContainer.classList.add('new-article-active');
})

closeButton.addEventListener('click', () => {
    mapContainer.classList.remove('new-article-active');
})

