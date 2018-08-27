$(document)
  .ready(function() {

    var data = {
      labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      series: [
        [
          {meta: 'description', value: 1},
          {meta: 'description', value: 5},
          {meta: 'description', value: 3},
          {meta: 'description', value: 9},
          {meta: 'description', value: 3},
          {meta: 'description', value: 6},
          {meta: 'description', value: 4}
        ],
        [
          {meta: 'other description', value: 2},
          {meta: 'other description', value: 4},
          {meta: 'other description', value: 2},
          {meta: 'other description', value: 8},
          {meta: 'other description', value: 5},
          {meta: 'other description', value: 2},
          {meta: 'other description', value: 7}
        ]
      ]
    };

    var options = {
      low: 0,
      high: 10,
      fullWidth: true,
      plugins: [
        Chartist.plugins.tooltip()
    ]};

    var chart = new Chartist.Line('.ct-chart', data, options);
});

