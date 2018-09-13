var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// --Url para conectarse a mongo
const url = "mongodb://localhost:27017";

// --Nombre de base de datos
const dbName = 'rop';

// --Nombre de colección en base de datos ('dash-tuto')
const collectionName = 'party_flags';

// --Variables globales para conexión a base de datos y colección
var db;
var collection;

/**
 * --GET obtener listado completo de registros
 * (http://localhost:3000/)
 */
router.get('/', function(req, res, next) {
  // --Iniciar conexión a cliente de mongo
  MongoClient.connect(url, function(err, client){
    if(err){  // --Si el servicio de mongo (mongod) esta apagado, regresar el error
      res.status(500).send(err);
    }else{
      // --Entrar a la base de datos "dash-tuto"
      db = client.db(dbName);

      // --Usar colección "reportes" en "dash-tuto"
      collection = db.collection(collectionName);

      console.log(req.query["filtro"],req.query["tipo"]);

      //Limit es si piden filtrado, si piden all va sin limit
      let limit = 5;
      if (req.query["filtro"] == "all") {
        limit = 0;
      }
      //Sort es top o bottom dependiendo del filtro
      let sort = -1;
      if (req.query["filtro"] == "bottom") {
        sort = 1;
      }

      //Type define lo que se busca
      let type = "buyer";
      switch (req.query["tipo"]) {
        case "dependencias":
          type = "dependency"
        break;
        case "estados":
          type = "state"
        break;
        case "municipios":
          type = "municipality"
        break;
        case "bancos":
          type = "funder"
        break;
        case "uc":
          type = "buyer"
        break;
        case "proveedor":
          type = "supplier"
        break;
      }

      // --Método find de mongo (referencia http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#find)
      // --Se agrega un método "toArray" porque viendo la referencia "find()" no tiene un callback
      collection.find(
        {
          "party.type":type
        },
        {
          limit: limit,
          sort: {
            "criteria_score.total_score" : sort
          }
        }
      ).toArray(function(err, result){
        if(err){  // --Si no fue posible realizar la consulta, regresar el error
          res.send(err);
        }else{
          res.send(result);
        }
      });

      // find({ public: true, type: "uc"}) --- pagina de unidades compradoras
      // find({ public: false}) --- pagina de suppliers (oculta)
      // find({ public: true}, aggregate: {govLevel}) --- municipios y estados
      // find({ public: true}, aggregate: {dependency}) --- dependencias
      }
  })
  // --Se cierra conexión a mongo
});

module.exports = router;
