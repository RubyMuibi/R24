const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const projectShema = new Schema({
  title: {
    type: String,
    required: true,
  }, //project title (project or app name)

  description: String,

  stack: String,

  image: {
    type: String,
  },

  url: {
    type: String,
  }, 
 
  source: {
    type: String,
  }, 

  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users' ,
    required: true
  }, 
});

const Project = model("projects", projectShema);
module.exports = Project;


/*
"title": "Forever",
"description": "This is a demo RUM (project)",
"stack": "JavaScript",
"image": "https://cdn.dribbble.com/userupload/12261880/file/original-b57a956aa0bfc9db4f8b4b7fab75622f.jpg?resize=1504x1128",
"source" : "https://github.com/RubyMuibi/r24",
"url": "https://github.com/RubyMuibi/r24",
"user": "65ca9edb7dd5527fe48c929f"
*/