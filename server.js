//DEPENDENCIES
require('dotenv').config()
//const {PORT, MONGODB_URI}=process.env
const express = require("express");
const app=express()
const plantController=require('./controllers/plant-controller')
const cors = require("cors")
const morgan = require("morgan")

//DB CONNECTION
const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose ✅"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


//MIDDLEWARE
app.use(express.json());
app.use('/plants', plantController)
app.use(cors());
app.use(morgan("dev"));



//ROUTES
//test
app.get("/", (req, res) => {
    res.send("hello world");
});


//LISTENER
app.listen(process.env.PORT || 4000, );
//app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });
//app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
