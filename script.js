// JavaScript
// console.log('Hello world!');

import {LeafletMap, TileLayer, Marker, Popup, Icon, Circle, Polygon} from 'leaflet';

const map = new LeafletMap('map').setView([35.63312418116784, 139.8803897193559], 17);

new TileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
	maxZoom: 16,
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

const circle = new Circle([35.623997745484566, 139.8871791848533], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 100//半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径0.1kmの範囲");

// 多角形の表示
const polygon = new Polygon([
  [35.632151, 139.872909],
  [35.631916, 139.8747],
  [35.628332, 139.875011],
  [35.62664, 139.879668],
  [35.62466, 139.879206],
  [35.626099, 139.873059]
], {
  color: 'orange',
  fillColor: 'rgb(255, 179, 0)',
  fillOpacity: 0.3
}).addTo(map);

polygon.bindPopup("ホテルエリア");

