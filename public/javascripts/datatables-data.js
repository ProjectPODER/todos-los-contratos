$(function(){
  // $.ajax({

  //   url: 'http://localhost:3000/api-data',
  //   type: 'GET',
  //   success : function(data) {
  //     console.log(data);
      
  //   }
  // });

  $('#tableTopDependencies').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "order": [[ 0, 'asc' ]],
    "pageLength": 5,
    "columns": [
        { "data": "party.ranking" },
        { "data": "party.name" },
        { "data": "cirteria_score.transparencia" },
        { "data": "cirteria_score.temporalidad" },
        { "data": "cirteria_score.competitividad" },
        { "data": "cirteria_score.trazabilidad" },
        { "data": "cirteria_score.total_score" }
    ]
  });

  $('#tableBottomDependencies').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "order": [[ 0, 'desc' ]],
    "pageLength": 5,
    "columns": [
        { "data": "party.ranking" },
        { "data": "party.name" },
        { "data": "cirteria_score.transparencia" },
        { "data": "cirteria_score.temporalidad" },
        { "data": "cirteria_score.competitividad" },
        { "data": "cirteria_score.trazabilidad" },
        { "data": "cirteria_score.total_score" }
    ]
  });
});

    
