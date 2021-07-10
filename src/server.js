const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const responseMiddleware = require('./middlewares/response');
const errorMiddleware = require('./middlewares/error');
const server = express();

server.use(cors());
server.use(express.json({ limit: '30mb' }));
server.use(express.urlencoded({ limit: '30mb', extended: true }));
server.use(helmet());
server.use('/', require('./routes'));
server.use(responseMiddleware);
server.use(errorMiddleware);

module.exports = server;