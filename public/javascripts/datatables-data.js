$(function(){
  function formatNumber ( data, type, row, meta ) {
    return (Number(data)*100).toFixed(2);
  }
  function formatParty ( data, type, row, meta ) {
    // console.log(row);
    return "<a href='https://staging.quienesquien.wiki/orgs/"+row.party.id+"'>"+data+"</a>"
  }

  function datatableConfig(tipo,filtro) {
    return {
      "ajax": {
        "url": "/api-data?tipo="+tipo+"&filtro="+filtro,
        "dataSrc": ""
      },
      "pageLength": 5,
      "paging": false,
      "searching": false,
      "info": false,
      "responsive": true,
      "columnDefs": [
        { "orderable": false, "width": "54px", "targets": 0, "responsivePriority": 1 },
        { "orderable": false, "width": "453px", "targets": 1, "responsivePriority": 2 },
        { "orderable": false, "width": "100px", "targets": 2, "responsivePriority": 4 },
        { "orderable": false, "width": "92px", "targets": 3, "responsivePriority": 5 },
        { "orderable": false, "width": "107px", "targets": 4, "responsivePriority": 6 },
        { "orderable": false, "width": "92px", "targets": 5, "responsivePriority": 7 },
        { "orderable": false, "width": "86px", "targets": 6, "responsivePriority": 3 }
      ],
      "order": [[ 0, 'asc' ]],
      "columns": [
          { "data": "criteria_score.total_score", render:formatNumber,class:"td-number" },
          { "data": "party.name", render:formatParty },
          { "data": "criteria_score.transparencia", render:formatNumber,class:"td-number" },
          { "data": "criteria_score.temporalidad", render:formatNumber,class:"td-number" },
          { "data": "criteria_score.competitividad", render:formatNumber,class:"td-number" },
          { "data": "criteria_score.trazabilidad", render:formatNumber,class:"td-number" },
          { "data": "criteria_score.total_score", render:formatNumber,class:"td-number" }
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
