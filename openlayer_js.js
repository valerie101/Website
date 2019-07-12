//1.We want a map
//2.Set telecomunication(location)
//		-the longitutde and the laditude of center of Map
//3.A view that allows us to see what the computer does with the map

var ourLoc;
var view;
var map;

//4. We want to create a function that starts up our map
function init() {
ourLoc = ol.proj.fromLonLat([37.41, 8.82]);


view = new ol.Map({
	target: 'map',
	layers: [
	new ol.layer.Tile({
		source:new ol.source.OSM()
})
],

view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
	 }
	 
//6.declae fucntion outside of the the above so that it works
//7. create some code to aniamte the view. start by animate fucntion
function panToLocation () {
	 var countryName= document.getElementById("country-name").value;

	if (country-name==="") {
		alert("You didn't enter a country name");
		return;
	}
	var query = "https://restcountries.eu/rest/v2/name/" + countryName
 }
//5. we need to run the init function when the page  colision adordehadr
window.onload = init;
