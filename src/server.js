'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('../src/middlewares/logger');
const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const foodRouter = require('../src/routes/food');
const clothesRouter = require('../src/routes/clothes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);


app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server is working on ${port}`);
  });
};

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: start,
};
