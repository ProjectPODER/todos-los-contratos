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
    "pageLength": 5,
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "orderable": false, "width": "125px", "targets": 0 },
      { "orderable": false, "width": "133px", "targets": 1 },
      { "orderable": false, "width": "133px", "targets": 2 },
      { "orderable": false, "width": "133px", "targets": 3 },
      { "orderable": false, "width": "134px", "targets": 4 },
      { "orderable": false, "width": "134px", "targets": 5 },
      { "orderable": false, "width": "134px", "targets": 6 }
    ],
    "order": [[ 0, 'asc' ]],
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
    "pageLength": 5,
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "orderable": false, "width": "125px", "targets": 0 },
      { "orderable": false, "width": "133px", "targets": 1 },
      { "orderable": false, "width": "133px", "targets": 2 },
      { "orderable": false, "width": "133px", "targets": 3 },
      { "orderable": false, "width": "134px", "targets": 4 },
      { "orderable": false, "width": "134px", "targets": 5 },
      { "orderable": false, "width": "134px", "targets": 6 }
    ],
    "order": [[ 0, 'desc' ]],
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

    
