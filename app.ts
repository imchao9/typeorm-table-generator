import "reflect-metadata";
import {createConnection,ConnectionOptions} from "typeorm";

const options: ConnectionOptions = {
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
}

createConnection(options).then(connection => {
console.log('test');
    // here you can start to work with your entities
}).catch(error => console.log(error));
