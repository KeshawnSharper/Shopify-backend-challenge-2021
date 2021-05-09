const express = require('express');

const imagesRouter = require('./router/image-router/image-router');
const usersRouter = require('./router/user-router/user-router');

const server = express();
// const cors = require('cors');

server.use(express.json());
server.use('/images',imagesRouter);
server.use('/users',usersRouter);


module.exports = server;