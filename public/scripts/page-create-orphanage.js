// const options = {
//     dragging: false,
//     touchZoom: false,
//     doubleClickZoom: false,
//     scrollWheelZoom: false,
//     zoomControl: false,
//   };

// create map
const map = L.map("mapid").setView([-11.4254, -61.447727], 16);

// create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create marker and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector(`[name=lat]`).value = lat;
  document.querySelector(`[name=lng]`).value = lng;

  //remove icon
  if (marker) {
    map.removeLayer(marker);
  }

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

const addPhotoField = () => {
  //select the #images container
  const container = document.querySelector("#images");

  //select container to dupe .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //dupe the last added img
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //if img field is empty, don't add a new img container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //clean fields before adding into the imgs container
  input.value = "";

  //add the duped into the #images container
  container.appendChild(newFieldContainer);
};

//del field
const deleteField = (event) => {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }
  span.parentNode.remove();
};

const toggleSelect = (event) => {
  //remove .active class on buttons
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  //set .active class on buttons
  const button = event.currentTarget;
  button.classList.add("active");

  //select clicked button
  const input = document.querySelector(`[name="open_on_weekends"]`);

  //check if y or n
  input.value = button.dataset.value;

  //update hidden input with the selected value
};

const validate = (event) => {
  const lat = document.querySelector(`[name=lat]`).value;
  const lng = document.querySelector(`[name=lng]`).value;
  const mapDiv = document.querySelector(`#mapid`);

  if (lat === "" || lng === "") {
    mapDiv.scrollIntoView();
    event.preventDefault();
    alert("Favor, preencha com um ponto de localização no mapa");
  } else return;
};
