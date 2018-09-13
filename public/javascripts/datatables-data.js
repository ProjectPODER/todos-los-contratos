$(function(){
  function formatNumber ( data, type, row, meta ) {
    return (Number(data)*100).toFixed(2);
  }
  function formatParty ( data, type, row, meta ) {
    // console.log(row);
    return "<a href='https://quienesquien.wiki/orgs/"+row.party.id+"'>"+data+"</a>"
  }

  function datatableConfig(tipo,filtro) {
    return {
      "ajax": {
        "url": "http://localhost:3000/api-data?tipo="+tipo+"&filtro="+filtro,
        "dataSrc": ""
      },
      "pageLength": 5,
      "paging": false,
      "searching": false,
      "info": false,
      "responsive": false,
      "columnDefs": [
        { "orderable": false, "width": "54px", "targets": 0 },
        { "orderable": false, "width": "453px", "targets": 1 },
        { "orderable": false, "width": "100px", "targets": 2 },
        { "orderable": false, "width": "92px", "targets": 3 },
        { "orderable": false, "width": "107px", "targets": 4 },
        { "orderable": false, "width": "92px", "targets": 5 },
        { "orderable": false, "width": "86px", "targets": 6 }
      ],
      "order": [[ 0, 'asc' ]],
      "columns": [
          { "data": "criteria_score.total_score", render:formatNumber },
          { "data": "party.name", render:formatParty },
          { "data": "criteria_score.transparencia", render:formatNumber },
          { "data": "criteria_score.temporalidad", render:formatNumber },
          { "data": "criteria_score.competitividad", render:formatNumber },
          { "data": "criteria_score.trazabilidad", render:formatNumber },
          { "data": "criteria_score.total_score", render:formatNumber }
      ],
      extra: "party.id"
    }
  }

  $('#tableTopDependencies').DataTable(datatableConfig("dependencias","top"));

  $('#tableBottomDependencies').DataTable(datatableConfig("dependencias","bottom"));

  $('#tableStates').DataTable(datatableConfig("estados","all"));
  $('#tableTopMunicipios').DataTable(datatableConfig("municipios","top"));

  $('#tableBottomMunicipios').DataTable(datatableConfig("municipios","bottom"));
  $('#tableTopBancos').DataTable(datatableConfig("bancos","all"));
  $('#tableUCs').DataTable(datatableConfig("ucs","all"));

  $('#tableSuppliers').DataTable(datatableConfig("proveedores","all"));

});
