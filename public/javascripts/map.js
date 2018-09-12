$(document)
  .ready(function() {

    var mymap = L.map('map', {
      center: [19.4326, -99.1332],
      zoom: 5
    });
    mymap.scrollWheelZoom.disable();

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoibWFyaXNvbGNtIiwiYSI6ImNqbGljc3dkNzBidmszc29idnVyZDBhMW4ifQ.VCXmAHrcAhrF25RR5XgUMQ'
    }).addTo(mymap);


<<<<<<< Updated upstream

=======
    // var marker = L.marker([19.4326, -99.1332]).addTo(mymap);
>>>>>>> Stashed changes

    $.ajax({
        url: 'http://localhost:3000/estados-mexico.js',
        type: 'GET',
        success : function(data) {
<<<<<<< Updated upstream

          L.geoJson(statesData, {style: style}).addTo(mymap);

          function getColor(d) {
              return d > 1000 ? '#800026' :
                     d > 500  ? '#BD0026' :
                     d > 200  ? '#E31A1C' :
                     d > 100  ? '#FC4E2A' :
                     d > 50   ? '#FD8D3C' :
                     d > 20   ? '#FEB24C' :
                     d > 10   ? '#FED976' :
                                '#FFEDA0';
          }

          function style(feature) {
            return {
              fillColor: getColor(feature.properties.density),
              weight: 2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.7
            };
          }

          // function getColor(d) {
          //     return d > 1 ? '#800026' :
          //            d > 0.75  ? '#BD0026' :
          //            d > 0.50  ? '#E31A1C' :
          //            d > 0.25  ? '#FC4E2A' :
          //                       '#FFEDA0';
          // }
          // var state = [], value = [];

          // data.forEach(function(dataset){
          //   state.push(dataset.estado);
          //   value.push(dataset.valor);
=======
          var state = [], value = [], latitud = [], longitud = []; 

          data.forEach(function(dataset){
            state.push(dataset.estado);
            value.push(dataset.valor);
            latitud.push(dataset.latitud);
            longitud.push(dataset.longitud);
            console.log(latitud);
>>>>>>> Stashed changes

          //   L.marker([dataset["latitud"], dataset["longitud"]]).addTo(mymap);
          //   L.polygon([[19.4326, -99.1332], [18, -90.8903], [18.94315, -99.30873]]).addTo(mymap);
          // })
        }
    });
});