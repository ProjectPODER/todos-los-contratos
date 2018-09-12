$(document)
  .ready(function() {

    var mymap = L.map('map', {
      center: [23.0000000, -102.0000000],
      zoom: 5
    });
    mymap.scrollWheelZoom.disable();

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoibWFyaXNvbGNtIiwiYSI6ImNqbGljc3dkNzBidmszc29idnVyZDBhMW4ifQ.VCXmAHrcAhrF25RR5XgUMQ'
    }).addTo(mymap);

    $.ajax({
        url: 'http://localhost:3000/estados-mexico.js',
        type: 'GET',
        success : function(data) {

          var geojson;
          // Our listeners
          geojson = L.geoJson(statesData, {
            style: style,
            onEachFeature: onEachFeature
          }).addTo(mymap);

          // Adding color
          function getColor(d) {
              return d > 1.0 ? '#ffffef' :
                     d > 0.9 ? '#ffffe5' :
                     d > 0.8 ? '#ffffcc' :
                     d > 0.7 ? '#ffeda0' :
                     d > 0.6 ? '#fed976' :
                     d > 0.5 ? '#feb24c' :
                     d > 0.4 ? '#fd8d3c' :
                     d > 0.3 ? '#fc4e2a' :
                     d > 0.2 ? '#e31a1c' :
                     d > 0.1 ? '#bd0026' :
                               '#800026';
          }

          function style(feature) {
            return {
              fillColor: getColor(feature.properties.total_score),
              weight: 2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.6
            };
          }

          // Adding interacion
          function highlightFeature(e) {
              var layer = e.target;

              layer.setStyle({
                  weight: 3,
                  color: '#666',
                  dashArray: '',
                  fillOpacity: 0.7
              });

              if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                  layer.bringToFront();
              };
              info.update(layer.feature.properties);
          }

          function resetHighlight(e) {
              geojson.resetStyle(e.target);
              info.update();
          }

          function zoomToFeature(e) {
              map.fitBounds(e.target.getBounds());
          }

          function onEachFeature(feature, layer) {
              layer.on({
                  mouseover: highlightFeature,
                  mouseout: resetHighlight,
                  click: zoomToFeature
              });
          }

          // Info control
          var info = L.control();

          info.onAdd = function (map) {
              this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
              this.update();
              return this._div;
          };

          // method that we will use to update the control based on feature properties passed
          info.update = function (props) {
              this._div.innerHTML = '<h4>Ranking de estados</h4>' +  (props ?
                  '<b>' + props.name + '</b><br />' + props.total_score + ' en total'
                  : 'Hover over a state');
          };

          info.addTo(mymap);

          // Legend Control
          var legend = L.control({position: 'bottomright'});

          legend.onAdd = function (map) {

              var div = L.DomUtil.create('div', 'info legend'),
                  grades = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                  labels = [];

              // loop through our intervals and generate a label with a colored square for each interval
              for (var i = 0; i < grades.length; i++) {
                  div.innerHTML +=
                      '<i style="background:' + getColor(grades[i]) + '"></i> ' +
                      grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '');
              }

              return div;
          };

          legend.addTo(mymap);

          // var state = [], value = [];

          // data.forEach(function(dataset){
          //   state.push(dataset.estado);
          //   value.push(dataset.valor);

          //   L.marker([dataset["latitud"], dataset["longitud"]]).addTo(mymap);
          // })
        }
    });
});