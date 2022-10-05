require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());

const port =  process.env.PORT || 3000;

const db_user = process.env.DB_USER;
const db_pass = encodeURIComponent(process.env.DB_PASSWORD);

const { GameDay } = require('./model/GameDay.js');
const { GameStats } = require('./model/GameStats.js');

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
  var dados2, dados3, dados4, dados5, dados6, dados7, dados8;
    const numJogos = await scrapNumJogos();
    for(var c = 1; c < numJogos; c++ ){
      if( c == 1){
        var dados1 = await scrapingSoccerStats_1();
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
  var b, recebeLINKS = []
  for (var i in recebeDados) {
   
    b = await getLink(recebeDados[i].item2, recebeDados[i].item3);

    recebeLINKS.push(b);
  }

  var c , recebeDadosCorner = [];
  for(var i in recebeLINKS){
    c = await scrapCorner(recebeLINKS[i].linkCorner_time1);
    recebeDadosCorner.push(c)
  }

  for(var i in recebeDadosCorner){
    recebeDadosCorner[i].timeCasa.push(recebeDados[i].item2)
    recebeDadosCorner[i].timeVisitante.push(recebeDados[i].item3)
  }

  await GameStats.create(recebeDadosCorner);

})

app.post('/del',async (req, res) => {
  await GameDay.deleteMany()
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
  const { time1 } = req.body
  console.log(req.body)
  //console.log(req.body._time1)
  console.log(time1);
  
  try {
  //{ 'time1': _time1 }
  //{ _id:'633d864ae3ac11b992791281' }
  //{ 'time1': 'Juventude' }
  const recebeDados = await GameStats.findOne({ "time1": time1 })
  res.status(200).json(recebeDados);
  } catch (error) {
    res.status(500).json({error: error})
  }
})

app.get('/teste', async (req, res)=>{

})

app.get('/', (req, res)=>{
  res.send("Hello World!");
})

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@clusterfutebol.xfuowcs.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(port);
    console.log("Conectamos!!!");
  }).catch((error)=>{
    console.log(error);
  })
