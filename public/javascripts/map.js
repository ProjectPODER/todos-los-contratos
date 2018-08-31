$(document)
  .ready(function() {
  	var mymap = L.map('map', {
  		center: [19.4326, -99.1332],
  		zoom: 5
  	});

  	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.light',
	    accessToken: 'pk.eyJ1IjoibWFyaXNvbGNtIiwiYSI6ImNqbGljc3dkNzBidmszc29idnVyZDBhMW4ifQ.VCXmAHrcAhrF25RR5XgUMQ'
	}).addTo(mymap);

  	var marker = L.marker([19.4326, -99.1332]).addTo(mymap);
});