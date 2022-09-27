const mongoose = require('mongoose')

const GameDay = mongoose.model('GamesDay', {
  item1: String,
  item2: String,
  item3: String,
});

module.exports = { GameDay }