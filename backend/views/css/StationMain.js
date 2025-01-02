document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

    const StationMap = L.map('StationMap',{attributionControl: false}).setView([35.25085802266448, -1.1686706542968752], 9.5);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apiKey
    }).addTo(StationMap);
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
    polyline.addTo(StationMap);  
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
    Newpolyline.addTo(StationMap);   
    //colors
    const PrimaryColor = 'gold'
    const FillColor = 'rgba(255, 230, 0, 0.765)'
    //icons
    var StationIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        iconSize: [15, 25],
        iconAnchor:   [7, 24],
    });
    // Places Data
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
    // function to add markers to the map
    function addMarkersToMap(data, Icon) {
        data.forEach((JSONData) => {
            const lat = JSONData.LattitudeY;
            const lon = JSONData.LongitudeX;
    
            // Add a marker to show the location.
            const Place = L.marker([lat, lon], { icon: Icon }).addTo(StationMap);
            const circle = L.circle([lat, lon], {
                color: PrimaryColor,
                fillColor: FillColor,
                fillOpacity: 0.2,
                radius: 50
            }).addTo(StationMap);
    
            // Add popup message
            const id = JSONData._id.$oid;
            const template = `
            <div style="text-align:center">
              <div class="map-LocationDisplayer">
                  <h1>${JSONData.Nom}</h1>
                  <div class="Location">
                  <h2>Location:</h2>
                  <h3>${lat + ', ' + lon}</h3>
                  </div>
                  <a class="voir-map-btn" href="/${id}">
                    <p>Voir plus</p>
                  </a>
              </div>
            </div>
            `;
            Place.bindPopup(template);
        });
    }
    function Markers() {
      addMarkersToMap(StationsData, StationIcon);
    }
    Markers();
});


