'use strict';

const Hapi = require('hapi');
const Wreck = require('wreck');
const Log = require('./log');
const router = require('./router');
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/scandgo'

mongoose.connect(databaseUrl, { useNewUrlParser: true }, (err) => {
    !err ? Log.success("Successfully connected to Scandgo database") : Log.error(err);
});

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

router.forEach((route) => { server.route(route) });

const init = async () => {

    await server.start();
    Log.success(`Server running at: ${server.info.uri}`);

};

process.on('unhandledRejection', (err) => {
    Log.error(err)
});

init();