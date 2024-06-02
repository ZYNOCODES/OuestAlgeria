document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

    const PontMap = L.map('PontMap').setView([35.25085802266448, -1.1686706542968752], 8);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apiKey
    }).addTo(PontMap);
    
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
    var polyline = L.polyline(lineCoordinates, { color: 'black', weight: 5 });
    polyline.addTo(PontMap);    
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
    Newpolyline.addTo(PontMap); 
    //colors
    const PrimaryColor = 'gold'
    const FillColor = 'rgba(255, 230, 0, 0.765)'
    //icons
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
    const ViaducsData = PontsData.filter(data => data.Categorie === "Viaduc");
    const UpdatedPontsData = PontsData.filter(data => data.Categorie !== "Viaduc");

    // function to add markers to the map
    function addMarkersToMap(data, Icon) {
        data.forEach((JSONData) => {
            const lat = JSONData.LattitudeY;
            const lon = JSONData.LongitudeX;
    
            // Add a marker to show the location.
            const Place = L.marker([lat, lon], { icon: Icon }).addTo(PontMap);
            const circle = L.circle([lat, lon], {
                color: PrimaryColor,
                fillColor: FillColor,
                fillOpacity: 0.2,
                radius: 50
            }).addTo(PontMap);
    
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
        addMarkersToMap(UpdatedPontsData, PontIcon),
        addMarkersToMap(ViaducsData, ViaducIcon)
    }
    Markers();
});


