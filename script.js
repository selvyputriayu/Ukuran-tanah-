// MAP
var map = L.map('map').setView([-7.6959, 111.9424], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// TITIK BIDANG TANAH (contoh dari gambar)
var koordinat = [
  [-7.6956, 111.9419],
  [-7.6955, 111.9432],
  [-7.6964, 111.9433],
  [-7.6965, 111.9420]
];

// POLYGON
var polygon = L.polygon(koordinat, {
  color: 'white',
  fillColor: 'red',
  fillOpacity: 0.6
}).addTo(map);

map.fitBounds(polygon.getBounds());

// TITIK SUDUT
koordinat.forEach((titik, i) => {
  L.marker(titik).addTo(map)
   .bindPopup("Titik " + (i+1));
});

// HITUNG LUAS
var turfPolygon = turf.polygon([[ 
  [111.9419, -7.6956],
  [111.9432, -7.6955],
  [111.9433, -7.6964],
  [111.9420, -7.6965],
  [111.9419, -7.6956]
]]);

var luas = turf.area(turfPolygon);
document.getElementById("luas").innerText = luas.toFixed(2);

// LOGOUT
function logout(){
  localStorage.clear();
  window.location.href="index.html";
  }
