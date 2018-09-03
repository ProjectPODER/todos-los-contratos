$(document)
  .ready(function() {

    // var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: "#d70206",
                    borderColor: "#d70206",
                    data: [
                        10040, 39746, 29476, 93626, 297473, 587438, 645362
                    ],
                    fill: false,
                }, {
                    label: 'My Second dataset',
                    fill: false,
                    backgroundColor: "#f4c63d",
                    borderColor: "#f4c63d",
                    data: [
                        34774, 19283, 38274, 74651, 98465, 20374, 49862
                    ],
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
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        
            var ctx = document.getElementById('historicoChart').getContext('2d');
            window.myLine = new Chart(ctx, config);
});

