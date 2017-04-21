const mongoose  = require('mongoose');
const Schema    = mongoose.Schema

let playerSchema  = new Schema({
  username  : String,
  password  : String,
  score     : Number
})

let Player = mongoose.model('Player', playerSchema)

module.exports = Player;
