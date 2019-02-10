/* eslint-disable no-global-assign */
Hapi = require('hapi')
Wreck = require('wreck')
mongoose = require('mongoose')
Schema = mongoose.Schema
logSymbols = require('log-symbols')
Log = require('./log')
router = require('./router')
fun = require('./functions')
User = require('./models/user')
Item = require('./models/item')
databaseUrl = 'mongodb://localhost:27017/scandgo'
/* eslint-enable no-global-assign */
