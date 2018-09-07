# Todos los Contratos


## Instalación
Requiere mongodb, nodejs y npm

### Código

    git clone ssh://git@gitlab.rindecuentas.org:2203/equipo-qqw/todos-los-contratos.git

    cd todos-los-contratos

    npm install

### Configurar la base de datos

    mongo
    > use quienesquienwiki
    db.createCollection("party_flags");
    > db.party_flags.insertMany(*copiar contenido del archivo data-ejemplo.json*);
    [ctrl+d]



### Ejecutar para desarrollo
    DEBUG=contratosapp:* npm start

### Ejecutar para producción

    npm start

Acceder a la app:    http://localhost:3000/
