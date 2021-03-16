// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors")


// DEPENDENCIES CONFIGURATIONS
const APP = express();
const PORT = 3003;


// MIDDLEWARE
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if(whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

APP.use(cors(corsOptions))
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
const equipmentController = require('./controllers/equipment.js');
const userController = require('./controllers/user.js');
APP.use("/equipment", equipmentController);
APP.use("/user", userController);


// LISTENER
APP.listen(PORT, () => {
  console.log('listening to EQUIPMENT server on ', PORT)
})