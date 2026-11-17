// JavaScript
// console.log('Hello world!');

import {LeafletMap, TileLayer, Marker, Popup, Icon} from 'leaflet';

const map = new LeafletMap('map').setView([35.63312418116784, 139.8803897193559], 17);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = new Marker([35.63312418116784, 139.8803897193559]).addTo(map);
marker.bindPopup('夢の国🎠').openPopup();

// クリック位置の緯度経度表示
const popup = new Popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

//アイコン
// const whiteIcon = new Icon({
//   iconUrl: 'images/ico.png',
//   shadowUrl: 'images/ico_shadow.png',

// iconSize:     [40, 40], // size of the icon
// shadowSize:   [40, 40], // size of the shadow
// iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
// popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
// });


// new Marker([35.626572, 139.887347], {icon: whiteIcon}).addTo(map).bindPopup('こんにちは！');

//複数アイコンをまとめて定義
class circleIcon extends Icon {
  static defaultOptions = {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  };
}

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

new Marker([35.626583, 139.887242], { icon: whiteIcon }).addTo(map).bindPopup('東京ディズニーシー');
new Marker([35.636437, 139.878375], { icon: pinkIcon }).addTo(map).bindPopup('東京ディズニーランドホテル');
