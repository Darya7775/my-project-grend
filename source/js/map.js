const LAT = 59.9683197;
const LNG = 30.3174411;

const map = L.map('map')
  .setView({
    lat: LAT,
    lng: LNG,
  },25);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
).addTo(map);

const pinIcon = L.icon({
    iconUrl: '../img/map-marker.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });
  
const oneMarker = L.marker(
    {
      lat: LAT,
      lng: LNG,
    },
    {
      draggable: false,
      icon: pinIcon,
    }
);

oneMarker.addTo(map);