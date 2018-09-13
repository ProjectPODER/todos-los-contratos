$(document)
  .ready(function() {

        var barChartData = {
            labels: ['2015', '2016', '2017'],
            datasets: [{
                label: '0 - 25',
                backgroundColor: "#bd0026",
                data: [
                    837203,
                    487627,
                    298376,
                    764539,
                    109276,
                    193764,
                    983275
                ]
            }, {
                label: '25 - 50',
                backgroundColor: "#fd8d3c",
                data: [
                    293802,
                    476297,
                    764862,
                    103172,
                    476308,
                    632836,
                    298467
                ]
            }, {
                label: '50 - 75',
                backgroundColor: "#fed976",
                data: [
                    648293,
                    209365,
                    679733,
                    698753,
                    475662,
                    857262,
                    194765
                ]
            }, {
                label: '75 - 100',
                backgroundColor: "#ffffe5",
                data: [
                    948732,
                    847629,
                    937290,
                    582694,
                    926534,
                    127413,
                    139473
                ]
            }]

        };

        var ctx = document.getElementById('importesChart').getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                title: {
                    display: false,
                    text: 'Chart.js Bar Chart - Stacked'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Año'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Importe'
                        }
                    }]
                }
            }
        });
});

