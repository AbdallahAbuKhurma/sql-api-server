'use strict';

require('dotenv').config();
const server = require('./src/server');

const pool = require('./src/models/pool');
const PORT = process.env.PORT || 3000;

pool
  .connect()
  .then(() => {
    server.start(PORT);
  })
  .catch((err) => {
    console.log('CONECTION ERROR', err.message);
  });
