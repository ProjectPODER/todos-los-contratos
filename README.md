# Todos los Contratos


### Código

    http://gitlab.rindecuentas.org/MC/todos-los-contratos
    cd contratosapp

### Configurar la base de datos
    
    mongo
    use quienesquienwiki
    db.createCollection("party_flags");
    db.party_flags.insertMany(*insertar data-ejemplo.json*);

### Ejecutar
    nmp install
    DEBUG=contratosapp:* npm start