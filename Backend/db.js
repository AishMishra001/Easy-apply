const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to Mongodb !");
  })
  .catch((err) => {
    console.log("error while connected to db !", err);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  firstname: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  lastname: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
});

const User = mongoose.model("User" , userSchema) ; 

module.exports = {
    User 
}
