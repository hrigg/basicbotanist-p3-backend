const mongoose = require("mongoose");

const CommentSchema= new mongoose.Schema({
    title: String,
    comment: String,
    plants: {
        type: mongoose.Types.ObjectId,
        ref: "Plants",
  
    },
    
}, {timestamps:true});

const Comments= mongoose.model('Comments', CommentSchema)

module.exports= Comments