const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([lat, lng], 16);

// create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create marker
L.marker([lat, lng], { icon }).addTo(map);

// image gallery
const selectImage = (event) => {
  const button = event.currentTarget;

  //remove Active class
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  //select clicked img
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //update img container
  imageContainer.src = image.src;

  //add Active class into the clicked img
  button.classList.add("active");
};
