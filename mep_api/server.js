// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session") 
const cookieParser = require("cookie-parser")
require("dotenv").config();  


// DEPENDENCIES CONFIGURATIONS
const APP = express();
const PORT = process.env.PORT || 3003;                
const DB_NAME = "mep"
const MONGODB_URI = process.env.MONGODBURI || "mongodb://localhost:27017/" + DB_NAME   


// CONTROLLERS
const sessionsController = require("/.controllers/session_controller");


// MIDDLEWARE
// const whitelist = ['http://localhost:3003', 'http://localhost:3000' ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log(origin)
//     if(whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     };
//   }
// };

// APP.use(cors(corsOptions));

APP.use(cookieParser (process.env.SECRET));

console.log(process.env);

APP.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
APP.use(express.json());
APP.use("sessions", sessionsController)



// DATABASE ERROR - DISCONNECTION
mongoose.connection.on("error", err => console.log(err.message + " is Mongod not running? "));
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));


// DATABASE CONNECTION
mongoose.connect(MONGODB_URI, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
  , () => {
    console.log("the connection with mongod is established at: ", MONGODB_URI )
  }
  );    
mongoose.connection.once("open", ()=>{
  console.log("connected to mongoose...")
});


// CONTROLLER - ROUTERS
const equipmentController = require("./controllers/equipment.js");
const userController = require('./controllers/user.js');
APP.use("/equipment", equipmentController);
APP.use("/user", userController);


// LISTENER
APP.listen(PORT, () => {
  console.log("listening to EQUIPMENT server on ", PORT);
});
