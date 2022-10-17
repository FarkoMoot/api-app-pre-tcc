const mongoose = require('mongoose');

const GameStats = mongoose.model('GamesStats',{
  time1: String,
  time2: String,
  receInfos: {},
  //timeCasa: [],
  //timeVisitante: [],
});

module.exports = { GameStats };