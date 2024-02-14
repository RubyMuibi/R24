const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userShema = new Schema({
  name: {
    type: String,
    required: true,
  },

  github_id: String,

  email: String,

  bio: String,

  website: String,

  github: String,

  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
});

const User = model("users", userShema);
module.exports = User;

/*
"name": "ruby",
"github_id": "0000",
"email":"ruby@rubymuibi.com",
"bio": "Hi, I am Ruby, a software developer",
"website": "https://rubymuibi.com",
"github": "https://github.com/rubymuibi"
*/
