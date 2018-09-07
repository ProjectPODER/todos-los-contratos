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
      { "orderable": false, "width": "130px", "targets": 0 },
      { "orderable": false, "width": "138px", "targets": 1 },
      { "orderable": false, "width": "138px", "targets": 2 },
      { "orderable": false, "width": "138px", "targets": 3 },
      { "orderable": false, "width": "140px", "targets": 4 },
      { "orderable": false, "width": "140px", "targets": 5 },
      { "orderable": false, "width": "140px", "targets": 6 }
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
      { "orderable": false, "width": "130px", "targets": 0 },
      { "orderable": false, "width": "138px", "targets": 1 },
      { "orderable": false, "width": "138px", "targets": 2 },
      { "orderable": false, "width": "138px", "targets": 3 },
      { "orderable": false, "width": "140px", "targets": 4 },
      { "orderable": false, "width": "140px", "targets": 5 },
      { "orderable": false, "width": "140px", "targets": 6 }
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

  $('#tableStates').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "pageLength": 10,
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "orderable": false, "targets": 0 },
      { "orderable": false, "targets": 1 },
      { "orderable": false, "targets": 2 },
      { "orderable": false, "targets": 3 },
      { "orderable": false, "targets": 4 },
      { "orderable": false, "targets": 5 },
      { "orderable": false, "targets": 6 }
    ],
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
  $('#tableTopMunicipios').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "pageLength": 5,
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "orderable": false, "width": "130px", "targets": 0 },
      { "orderable": false, "width": "138px", "targets": 1 },
      { "orderable": false, "width": "138px", "targets": 2 },
      { "orderable": false, "width": "138px", "targets": 3 },
      { "orderable": false, "width": "140px", "targets": 4 },
      { "orderable": false, "width": "140px", "targets": 5 },
      { "orderable": false, "width": "140px", "targets": 6 }
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

  $('#tableBottomMunicipios').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "pageLength": 5,
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "orderable": false, "width": "130px", "targets": 0 },
      { "orderable": false, "width": "138px", "targets": 1 },
      { "orderable": false, "width": "138px", "targets": 2 },
      { "orderable": false, "width": "138px", "targets": 3 },
      { "orderable": false, "width": "140px", "targets": 4 },
      { "orderable": false, "width": "140px", "targets": 5 },
      { "orderable": false, "width": "140px", "targets": 6 }
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
  $('#tableTopBancos').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "pageLength": 5,
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "orderable": false, "width": "130px", "targets": 0 },
      { "orderable": false, "width": "138px", "targets": 1 },
      { "orderable": false, "width": "138px", "targets": 2 },
      { "orderable": false, "width": "138px", "targets": 3 },
      { "orderable": false, "width": "140px", "targets": 4 },
      { "orderable": false, "width": "140px", "targets": 5 },
      { "orderable": false, "width": "140px", "targets": 6 }
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
  $('#tableDependencies').DataTable( {
    "ajax": {
      "url": "http://localhost:3000/api-data",
      "dataSrc": ""
    },
    "order": [[ 0, 'asc' ]],
    "pageLength": 10,
    "language": {
      "info": "Mostrando del _START_ al _END_  de _TOTAL_ resultados",
      "lengthMenu": "Mostrar _MENU_ resultados",
      "infoEmpty": "Mostrando _END_ de _TOTAL_ resultados",
      "emptyTable": "No hay datos disponibles",
      "search": "Buscar:",
      "paginate": {
        "previous": "Anterior",
        "next": "Siguiente"
      }
    },
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

    
