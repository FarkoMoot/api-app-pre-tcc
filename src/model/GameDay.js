const mongoose = require('mongoose')
/*
const Schema = mongoose.Schema;

const ModelGameDaySchema = new Schema({
  item1: String,
  item2: String,
  item3: String,
}) */

const GameDay = mongoose.model('GamesDay', {
  item1: String,
  item2: String,
  item3: String,
});

module.exports = { GameDay }