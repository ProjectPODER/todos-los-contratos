$(document)
  .ready(function() {

    $.ajax({

        url: 'http://localhost:3000/api-data',
        type: 'GET',
        success : function(data) {
            console.log(data);

            var config = {
                type: 'line',
                data: {
                    labels: data.years,
                    datasets: [{
                        label: data.party,
                        backgroundColor: "#d70206",
                        borderColor: "#d70206",
                        data: [
                            data.party
                        ],
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        // text: 'Chart.js Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Año'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Transparencia'
                            }
                        }]
                    }
                }
            };

            var ctx = document.getElementById('historicoChart').getContext('2d');
            window.myLine = new Chart(ctx, config);
          
        }
    });
});

