document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'pk.eyJ1Ijoienlub2NvZGVzIiwiYSI6ImNsZnl1Y2w3bzA4YjkzbW10aXFvYTJoYm8ifQ.wqP0wnxpZIjsUSlMXfGqJQ';

    const HalteMap = L.map('HalteMap').setView([35.25085802266448, -1.1686706542968752], 9.5);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apiKey
    }).addTo(HalteMap);
    
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
    polyline.addTo(HalteMap);   
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
    Newpolyline.addTo(HalteMap);  
    //colors
    const PrimaryColor = 'gold'
    const FillColor = 'rgba(255, 230, 0, 0.765)'
    //icons
    var HalteIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: [15, 25],
        iconAnchor:   [7, 24],
    });
    // Places Data
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
    // function to add markers to the map
    function addMarkersToMap(data, Icon) {
        data.forEach((JSONData) => {
            const lat = JSONData.LattitudeY;
            const lon = JSONData.LongitudeX;
    
            // Add a marker to show the location.
            const Place = L.marker([lat, lon], { icon: Icon }).addTo(HalteMap);
            const circle = L.circle([lat, lon], {
                color: PrimaryColor,
                fillColor: FillColor,
                fillOpacity: 0.2,
                radius: 50
            }).addTo(HalteMap);
    
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
    function Markers(){
        addMarkersToMap(haltesData, HalteIcon)
    }
    Markers();
});


