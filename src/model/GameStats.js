const mongoose = require('mongoose');

const GameStats = mongoose.model('GamesStats',{
  timeCasa: [],
  timeVisitante: [],
});

module.exports = { GameStats };