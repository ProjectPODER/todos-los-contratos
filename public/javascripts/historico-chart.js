$(document)
  .ready(function() {

    $.ajax({

        url: 'http://localhost:3000/historico-data',
        type: 'GET',
        success : function(data) {
            // console.log(data);

            var labels = [], label = [], score = [];
            
            data.forEach(function(dataset) {
                dataset.years.forEach(year){
                    labels.push(year.year)
                    score.push(year.criteria_score.total_score);
                };
                label.push(dataset.party.name);
            });

            var config = {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        backgroundColor: "#d70206",
                        borderColor: "#d70206",
                        data: [
                            score
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

