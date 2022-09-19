const mongoose = require("mongoose");

const PlantSchema= new mongoose.Schema({
    name: String,
    image: String,
    imageTwo: String,
    type: String,
    description: String,
}, {timestamps:true});

const Plants= mongoose.model('Plants', PlantSchema)

module.exports= Plants