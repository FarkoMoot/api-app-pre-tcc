import * as dotenv from 'dotenv' 
dotenv.config()
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());

const port =  process.env.PORT || 3000;
const db_user = process.env.DB_USER;
const db_pass = encodeURIComponent(process.env.DB_PASSWORD);

const { GameDay } = require('./model/GameDay.js');

const { GameLast5 } = require('./model/GameLast5.js');

const { GameStats } = require('./model/GameStats.js');

const { GameGol } = require('./model/GameGol.js')

const { getGoals, getGoals2, lastMatchs } = require('./scrapGoals.js');

const { getLink, resolveLinkCorner, scrapStats, scrapCorner } = require('./scrapStats.js');

const {
  scrapNumJogos,
  scrapingSoccerStats_1,
  scrapingSoccerStats_2,
  scrapingSoccerStats_3,
  scrapingSoccerStats_4,
  scrapingSoccerStats_5,
  scrapingSoccerStats_6,
  scrapingSoccerStats_7,
  scrapingSoccerStats_8,
} = require('./scrapMain.js');

app.get('/add', async (req, res) => {
  var dados = [];
  var dados1, dados2, dados3, dados4, dados5, dados6, dados7, dados8;
  //console.log('1')
    const numJogos = await scrapNumJogos();
    //console.log('2')
    for(var c = 1; c < numJogos; c++ ){
      if( c == 1){
        dados1 = await scrapingSoccerStats_1();
        /*
        dados1 = {
          item1:"00:11",
          item2:"Sao Paulo",
          item3:"Atletico MG"
        }*/
      }else if( c == 2){
        dados2 = await scrapingSoccerStats_2();
      }else if( c == 3){
        dados3 = await scrapingSoccerStats_3();
      }else if( c == 4){
        dados4 = await scrapingSoccerStats_4();
      }else if( c == 5){
        dados5 = await scrapingSoccerStats_5();
      }else if( c == 6){
        dados6 = await scrapingSoccerStats_6();
      }else if( c == 7){
        dados7 = await scrapingSoccerStats_7();
      }else if( c == 8){
        dados8 = await scrapingSoccerStats_8();
      }
    }
    //console.log('3')
    
    for(var c = 1; c < numJogos; c++ ){
      if( c == 1){
        dados.push(dados1);
      }else if( c == 2){
        dados.push(dados2);
      }else if( c == 3){
        dados.push(dados3);
      }else if( c == 4){
        dados.push(dados4);
      }else if( c == 5){
        dados.push(dados5);
      }else if( c == 6){
        dados.push(dados6);
      }else if( c == 7){
        dados.push(dados7);
      }else if( c == 8){
        dados.push(dados8);
      }
    }

  try {
  
    await GameDay.create(dados)
    await res.json('Deu Certo');

  } catch (error) {
    res.json(error);
  }

})

app.get('/addStats', async (req, res) => {
  const recebeDados = await GameDay.find();
  //console.log(recebeDados[0].item2)
  var b, recebeLINKS = []

  for (var i in recebeDados) {
    b = await getLink(recebeDados[i].item2, recebeDados[i].item3);
    recebeLINKS.push(b.linkCorner_time1);
  }

  console.log(recebeLINKS)

  var c , recebeDadosCorner = [];
  for(var i in recebeLINKS){
    c = await scrapCorner(recebeLINKS[i],recebeDados[i].item2, recebeDados[i].item3);
    recebeDadosCorner.push(c)
  }
  console.log(recebeDadosCorner)

  /*
  for(var i in recebeDadosCorner){
    recebeDadosCorner[i].timeCasa.push(recebeDados[i].item2)
    recebeDadosCorner[i].timeVisitante.push(recebeDados[i].item3)
  }
  console.log(recebeDadosCorner)
  */

  await GameStats.create(recebeDadosCorner);
  res.status(200).json('deucerto');

})

app.post('/del',async (req, res) => {
  await GameDay.deleteMany()
  await GameStats.deleteMany()
  await GameLast5.deleteMany()
  await GameGol.deleteMany()
  res.status(200).json('deu certo')
})

app.get('/findStart',async (req,res) => {
  try {
    const recebeDados = await GameDay.find();
    res.status(200).json(recebeDados);
  } catch (error) {
    res.status(500).json({error: error})
  }
})

app.post('/findStats', async (req, res)=>{
  try{
    const { _time1 } = req.body

    //{ 'time1': _time1 }
    //{ _id:'633d864ae3ac11b992791281' }
    //{ 'time1': 'Juventude' }
    const recebeDados = await GameStats.findOne({ 'time1': _time1});    
    
    res.status(200).json(recebeDados);
  } catch (error) {
    res.status(500).json({error: error})
  }
})

app.post('/addGoals', async (req, res)=>{
  
  const recebeDados = await GameDay.find()
  var b, recebelinks = [], recebeTimes = [];
  for (var i in recebeDados) {
    b = await getLink(recebeDados[i].item2, recebeDados[i].item3);
    recebelinks.push(b.linkFut24_1)
    recebelinks.push(b.linkFut24_2)
    recebeTimes.push(recebeDados[i].item2)
    recebeTimes.push(recebeDados[i].item3)
  }

  //const link = 'https://www.futbol24.com/team/Brazil/Palmeiras-SP/'
  var recebe1, recebe2, recebe3 = [];
  for( let c = 0 ; c < recebelinks.length ; c = c + 2 ){
    recebe1 = await getGoals2(recebelinks[c], recebeTimes[c])
    recebe2 = await getGoals2(recebelinks[c+1], recebeTimes[c+1])
    recebe3.push(recebe1)
    recebe3.push(recebe2)
  }

  //escrever no db
  await GameGol.create(recebe3)
  res.status(200).json('deu certo')
  //console.log(a)
})

app.get('/', (req, res)=>{
  res.send("Hello World!");
})

app.get( '/addLast', async (req, res) => {
  console.log('start');
  //pega link de cada time
  const recebeDados = await GameDay.find()
  var b, recebelinks = [], recebeTimes = [];
  console.log('asdasdads');
  for (var i in recebeDados) {
    b = await getLink(recebeDados[i].item2, recebeDados[i].item3);
    recebelinks.push(b.linkFsStats_time1)
    recebelinks.push(b.linkFsStats_time2)
    recebeTimes.push(recebeDados[i].item2)
    recebeTimes.push(recebeDados[i].item3)
  }

  //console.log(recebelinks.length);

  var recebe_last_casa = [], recebe_last_visitante = []
  for ( var c = 0; c < recebelinks.length ; c = c + 2 ){
    console.log('asdasdsadasdasdasdasdasdasdasdsadasdas')
    const last_5games_Casa = await lastMatchs(recebelinks[c], recebeTimes[c])
    const last_5games_Visitante = await lastMatchs(recebelinks[c+1], recebeTimes[c+1])
    recebe_last_casa.push(last_5games_Casa)
    recebe_last_visitante.push(last_5games_Visitante)
  }
  console.log('passou 1')
  var recebePraExpor = []
  for (var i in recebe_last_casa) {
    const time1 = recebeDados[i].item2
    const time2 = recebeDados[i].item3
    const timeCasa = recebe_last_casa[i].recebeHere
    const timeVisitante = recebe_last_visitante[i].recebeHere
    const p = {
      time1,
      time2,
      timeCasa,
      timeVisitante
    }
    recebePraExpor.push(p)
  }

  console.log('passou 2')
  console.log(recebePraExpor);

  await GameLast5.create(recebePraExpor)

  res.status(200).json('deu certo!')
})

app.post('/findLast', async (req, res) => {
  try{

    const { _time1 } = req.body
    const recebeDados = await GameLast5.findOne({ 'time1': _time1});
    
    res.status(200).json(recebeDados);
  } catch (error) {
    res.status(500).json({error: error})
  }
})

app.post('/teste', async (req, res) => {

})

app.post('/findGoals', async (req, res) => {
  try{

    const { _time1 } = req.body
    const recebeDados = await GameGol.findOne({ 'time': _time1});
    
    res.status(200).json(recebeDados);
  } catch (error) {
    res.status(500).json({error: error})
  }
})

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@clusterfutebol.xfuowcs.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(port);
    console.log("Conectamos!!!");
  }).catch((error)=>{
    console.log(error);
  })
