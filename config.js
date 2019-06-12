'use strict';

// libreria de mysql
const mySqlModel = require('mysql');

module.exports = {

  TokenERP: 'csD3s@rr01103x73rn0@pi1nt3l1s1s2016',
  IdProductoComisionTuClick: 2118,
  // /////////////////////////////////////////////////////////////////////////////////////////////
  // // PRODUCCIÓN //////////////////////////////////////////////////////////////////////////////
  // ///////////////////////////////////////////////////////////////////////////////////////////

  // ApiErp: 'https://ws.compusoluciones.com/clicksuscribe/',
  // AccessControlAllowOrigin: '*',
  // bccMailList: 'osestrad@compusoluciones.com; josedera@compusoluciones.com; kelizald@compusoluciones.com, mramos@compusoluciones.com, mhernandez@compusoluciones.com, rledezma@compusoluciones.com',
  // connectionPool: mySqlModel.createPool({
  //   connectionLimit: 15,
  //   host: 'gkrypton.ccnnrymipzih.us-east-1.rds.amazonaws.com',
  //   user: 'User',
  //   password: 'Us3rM@rketPl@ce2016',
  //   database: 'clicksuscribe',
  //   dateStrings: 'date',
  //   debug: false,
  // }),

  // //////////////////////////////////////////////////////////////////////////////////////////
  // // PRUEBAS //////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////

  // ApiErp: 'https://ws.compusoluciones.com/IntelisisPruebas/',
  ApiErp: 'http://localhost:54374/',
  AccessControlAllowOrigin: '*',
  environment: 'test',
  bccMailList: 'mhernandez@compusoluciones.com',
  connectionPool: mySqlModel.createPool({
    connectionLimit: 10,
    host: '10.3.102.70',
    user: 'root',
    password: 'Inn0vaci0n',
    database: 'clickAbril',
    dateStrings: 'date',
    debug: false,
  }),

  // Esta variable en mysql permite cambiar el número de conexiones y por lo tanto evita el error de "Too many conections"
  // SHOW VARIABLES LIKE "max_connections"
  // SET GLOBAL max_connections = 312
  // Referencia http://blog.desdelinux.net/arreglar-error-mysql-too-many-connections/

  // //////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////

};
