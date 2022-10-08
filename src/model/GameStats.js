const mongoose = require('mongoose');

const GameStats = mongoose.model('GamesStats',{
  timeCasa: [],
  timeVisitante: [],
  time1: String,
  time2: String,
  receInfos: {},
});

module.exports = { GameStats };