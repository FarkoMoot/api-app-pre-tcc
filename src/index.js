require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());

const port =  process.env.PORT || 3000;

const testee = process.env.TEST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASSWORD;
//encodeURIComponent(

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
//const scrapingSoccerStats = require('./scrapMain.js');

app.get('/add', async (req, res) => {
  try {
    var dados = [];
    var dados1, dados2, dados3, dados4, dados5, dados6, dados7, dados8;
    
    const numJogos = await scrapNumJogos();

    for(var c = 1; c < numJogos; c++ ){
      if( c == 1){
        dados1 = await scrapingSoccerStats_1();
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

    //escrever isso no DB agora
    await res.json(dados);

  } catch (error) {
    res.json(error)
  }

})

app.post('/del',(req, res) => {
  //criar rote que deleta o conteudo do DB
})

app.get('/find',(req,res) => {
  //criar rota que carrega os dados do DB
})

app.get('/', (req, res)=>{
  console.log(testee);
  console.log(db_user);
  console.log(db_pass);

  res.send("Hello World! 22");
})


mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@clusterfutebol.xfuowcs.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Conectamos!!!");
    app.listen(port);
  }).catch((error)=>{
    console.log(error);
  })
/*
mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@clusterfutebol.xfuowcs.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('conectamos!');
  })
  .catch((error) => {
    console.log('ERRO:');
    console.log(error);
  })
  */

