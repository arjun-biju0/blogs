const mongoose = require("mongoose");

const blogSchema= new mongoose.Schema({
    title:{
      type: String,
      required: true,
    },
    content:{
      type: String,
      required: true,
    },
    username:{
      type: String,
      required: true,
    }
})

exports.Blog=mongoose.model('Blog',blogSchema);
