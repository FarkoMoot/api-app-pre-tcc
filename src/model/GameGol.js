const mongoose = require('mongoose');

const GameGol = mongoose.model('GamesGol',{
  time: String,
  recebeGOLS: {}
})

module.exports = { GameGol }