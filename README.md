# Todos los Contratos


## Instalación
Requiere mongodb, nodejs y npm

### Código

    git clone https://github.com/ProjectPODER/todos-los-contratos.git

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


### Variables de entorno
* PORT para definir el puerto (default: 3000);
* MONGO_URL es la url completa de mongodb (default: "mongodb://localhost:27013")
* EMAIL_SERVER el servidor con el que enviará los mails de contacto
* EMAIL_USER el usuario de correo
* EMAIL_PASS el password del usuario de correo
