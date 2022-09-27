const mongoose = require('mongoose')

const GameDay = mongoose.model('GamesDay', {
  item1: string,
  item2: string,
  item3: string,
});

module.exports = { GameDay }