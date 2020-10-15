// create map
const map = L.map("mapid").setView([-11.425400, -61.447727], 16);

// create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  `Abrigo Municipal Pingo de Gente <a href="orphanage.html?id=1" class="choose-ophanage"><img src="./public/images/arrow-white.svg" ></a>`
);

// create marker
L.marker([-11.425400, -61.447727], { icon }).addTo(map).bindPopup(popup);
