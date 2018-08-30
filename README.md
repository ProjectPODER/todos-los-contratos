# Todos los Contratos


### Código

    git clone http://gitlab.rindecuentas.org/equipo-qqw/todos-los-contratos
    cd contratosapp

### Configurar la base de datos
    
    mongo
    use quienesquienwiki
    db.createCollection("party_flags");
    db.party_flags.insertMany(*insertar data-ejemplo.json*);

### Ejecutar
    nmp install
    DEBUG=contratosapp:* npm start // npm start
    http://localhost:3000/