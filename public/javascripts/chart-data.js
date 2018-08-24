$(document)
  .ready(function() {
  	// new Chartist.Line('.ct-chart', {
   //    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
   //    series: [
   //      [12, 9, 7, 8, 5, 8, 3],
   //      [2, 1, 3.5, 7, 3, 9, 7],
   //      [1, 3, 4, 5, 6, 4, 6]
   //    ]
   //  }, {
   //    fullWidth: true,
   //    chartPadding: {
   //      right: 40
   //    }
   //  });

    var chart = new Chartist.Line('.ct-chart', {
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
    }, {
      low: 0,
      high: 10,
      fullWidth: true,
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });
});

