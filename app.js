"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const options = {
    driver: {
        type: "mysql",
        host: "localhost",
        port: 6033,
        username: "root",
        password: "mRVHePdfa4Z3X0ewfctefpZuqDrSbtINR4VRslgA2s",
        database: "manytomany",
    },
    autoSchemaSync: true,
    entities: [__dirname + "/model/*.js"]
};
typeorm_1.createConnection(options).then(connection => {
    console.log('test');
    // here you can start to work with your entities
}).catch(error => console.log(error));
