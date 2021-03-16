// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose')


// DEPENDENCIES CONFIGURATIONS
const APP = express();
const PORT = 3003;


// MIDDLEWARE
APP.use(express.json());


// DATABASE ERROR - DISCONNECTION
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


// DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/mep', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


// CONTROLLER - ROUTERS
const mepController = require('./controllers/mep.js');
APP.use('/mep', mepController);


// LISTENER
APP.listen(PORT, () => {
  console.log('listening to MEP server on ', PORT)
})