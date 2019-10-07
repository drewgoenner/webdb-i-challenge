const express = require('express');

const accountRouter = require('./accounts/accountRouter.js');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountRouter);

server.get('/', (req, res) => {
    res.send('<h3>Working with SQLite3</h3>')
})



module.exports = server;