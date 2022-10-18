const mongoose = require('mongoose');

const GameLast5 = mongoose.model('GamesLast5',{
  time1: String,
  time2: String,
  timeCasa: {},
  timeVisitante: {}
})

module.exports = { GameLast5 }