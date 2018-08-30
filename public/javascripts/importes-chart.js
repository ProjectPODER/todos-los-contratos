$(document)
  .ready(function() {

        var barChartData = {
            labels: ['2015', '2016', '2017'],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: "#d70206",
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
                label: 'Dataset 2',
                backgroundColor: "#d17905",
                data: [
                    293802,
                    476297,
                    764862,
                    103172,
                    476308,
                    632053,
                    298467
                ]
            }, {
                label: 'Dataset 3',
                backgroundColor: "#f4c63d",
                data: [
                    648293,
                    209365,
                    679733,
                    698753,
                    475662,
                    857262,
                    194765
                ]
            }]

        };

        var ctx = document.getElementById('importesChart').getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                title: {
                    display: true,
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
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
});

