const puppeterr = require('puppeteer')

async function getLink(time1, time2) {
  var linkCorner_time1, linkCorner_time2;
  var linkStats_time1, linkStats_time2;
  var linkFsStats_time1, linkFsStats_time2;

  /* LINKs
    https://www.soccerstats.com/team.asp?league=brazil&stats=16-athletico-pr
    final do link ID-NOMETIME-NOME2TIME ex: 16-athletico-pr ou 6-ceara

    https://www.totalcorner.com/team/view/808
    final do link ID para cada time

    https://www.totalcorner.com/match/corner-stats/124880462/Ceara-vs-America-MG
    link de cada jogo, ID/time1-vs-times

  */

    if(time1 == 'Atletico MG'){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/808';
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=9-atletico-mg';
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,atletico-mineiro,175.php'
    }else if( time1 == 'Avai' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/1128'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=17-avai'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,avai,177.php';
    }else if( time1 == 'Fluminense' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/817'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=1-fluminense'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,fluminense,183.php'
    }else if( time1 == 'Atletico GO' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/9047'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=3-atletico-go'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,atletico-goianiense,192.php'
    }else if( time1 == 'Athletico PR' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/51412'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=16-athletico-pr'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,atletico-paranaense,176.php'
    }else if( time1 == 'Juventude' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/2179'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=19-juventude'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,juventude,3781.php'
    }else if( time1 == 'Flamengo' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/800'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=4-flamengo'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,flamengo,182.php'
    }else if( time1 == 'Bragantino' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/803'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=20-bragantino'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,bragantino,199.php'
    }else if( time1 == 'Goias' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/818'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=8-goias'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,goias,184.php'
    }else if( time1 == 'Fortaleza' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/927'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=13-fortaleza'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,fortaleza-ec,2640.php'
    }else if( time1 == 'Ceara' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/798'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=6-ceara'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,ceara,190.php'
    }else if( time1 == 'America MG' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/1098'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=18-america-mg'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,america-mineiro,195.php'
    }else if( time1 == 'Internacional' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/964'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=10-internacional'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,internacional,187.php'
    }else if( time1 == 'Santos' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/806'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=2-santos'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,santos,191.php'
    }else if( time1 == 'Botafogo' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/1497'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=11-botafogo'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,botafogo,178.php'
    }else if( time1 == 'Palmeiras' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/807'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=5-palmeiras'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,palmeiras,189.php'
    }else if( time1 == 'Cuiaba' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/4196'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=14-cuiaba'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,cuiaba,2639.php'
    }else if( time1 == 'Coritiba' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/799'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=7-coritiba'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,coritiba,197.php'
    }else if( time1 == 'Sao Paulo' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/814'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=15-sao-paulo'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,sao-paulo,193.php'
    }else if( time1 == 'Corinthians' ){
      linkCorner_time1 = 'https://www.totalcorner.com/team/view/804'
      linkStats_time1 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=12-corinthians'
      linkFsStats_time1 = 'https://es.fcstats.com/club,estadistica,corinthians,179.php'
    }
  

    if(time2 == 'Atletico MG'){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/808';
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=9-atletico-mg'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,atletico-mineiro,175.php'
    }else if( time2 == 'Avai' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/1128'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=17-avai'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,avai,177.php';
    }else if( time2 == 'Fluminense' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/817'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=1-fluminense'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,fluminense,183.php'
    }else if( time2 == 'Atletico GO' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/9047'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=3-atletico-go'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,atletico-goianiense,192.php'
    }else if( time2 == 'Athletico PR' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/51412'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=16-athletico-pr'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,atletico-paranaense,176.php'
    }else if( time2 == 'Juventude' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/2179'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=19-juventude'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,juventude,3781.php'
    }else if( time2 == 'Flamengo' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/800'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=4-flamengo'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,flamengo,182.php'
    }else if( time2 == 'Bragantino' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/803'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=20-bragantino'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,bragantino,199.php'
    }else if( time2 == 'Goias' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/818'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=8-goias'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,goias,184.php'
    }else if( time2 == 'Fortaleza' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/927'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=13-fortaleza'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,fortaleza-ec,2640.php'
    }else if( time2 == 'Ceara' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/798'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=6-ceara'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,ceara,190.php'
    }else if( time2 == 'America MG' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/1098'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=18-america-mg'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,america-mineiro,195.php'
    }else if( time2 == 'Internacional' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/964'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=10-internacional'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,internacional,187.php'
    }else if( time2 == 'Santos' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/806'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=2-santos'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,santos,191.php'
    }else if( time2 == 'Botafogo' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/1497'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=11-botafogo'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,botafogo,178.php'
    }else if( time2 == 'Palmeiras' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/807'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=5-palmeiras'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,palmeiras,189.php'
    }else if( time2 == 'Cuiaba' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/4196'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=14-cuiaba'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,cuiaba,2639.php'
    }else if( time2 == 'Coritiba' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/799'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=7-coritiba'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,coritiba,197.php'
    }else if( time2 == 'Sao Paulo' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/814'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=15-sao-paulo'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,sao-paulo,193.php'
    }else if( time2 == 'Corinthians' ){
      linkCorner_time2 = 'https://www.totalcorner.com/team/view/804'
      linkStats_time2 = 'https://www.soccerstats.com/team.asp?league=brazil&stats=12-corinthians'
      linkFsStats_time2 = 'https://es.fcstats.com/club,estadistica,corinthians,179.php'
    }



    
    const a = await resolveLinkCorner(linkCorner_time1)
    //const b = await resolveLinkCorner(linkCorner_time2)

    linkCorner_time1 = a;
    //linkCorner_time2 = b;

    
    //const expor = { linkCorner_time1, linkStats_time1, linkStats_time2 }
    const expor = { linkCorner_time1, linkFsStats_time1, linkFsStats_time2 }
    return expor
}

async function resolveLinkCorner(link){
  const browser = await puppeterr.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link);

  await page.waitForSelector('#inplay_match_table > tbody.tbody_match');

  const linkinfo = await page.evaluate( () => {
    return {
      //pega o numero de children do table que estao os jogos
      linkfinal: document.querySelector('#inplay_match_table > tbody.tbody_match > tr:nth-child(2) > td:nth-child(16) > a').href,
    }
  });

  await browser.close();
  return linkinfo.linkfinal

}

async function scrapStats(link_time) {
  const browser = await puppeterr.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link_time);
  
  //await page.waitForTimeout(60000);

  //await page.waitForSelector('#content > div:nth-child(5)');
  
  //await page.waitForSelector('#content > div:nth-child(5) > div > div:nth-child(2)');
  await page.waitForSelector('#content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(1)');
  
  
  const receInfos = await page.evaluate( () => {
    return {
      //pega o numero de children do table que estao os jogos
      linkfinal1: document.querySelector('#content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(1)').innerHTML,
      linkfinal2: document.querySelector('#content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > b').innerHTML,
      linkfinal3: document.querySelector('#content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > b').innerHTML,
    }
  });
  console.log('q2');
  console.log(receInfos);





  /*pegar dados
  Tempo 1-15, innerHTML
  #content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(1)
  Gols pro, 1-15, innerHTML
  #content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > b
  Gols contra, 1-15, innerHTML
  #content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > b

  Tempo 16-30, innerHTML
  #content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(1)
  Gols pro, 16-30, innerHTML
  #content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > b
  Gols contra, 16-30, innerHTML
  #content > div:nth-child(5) > div > div:nth-child(2) > div.tabberlive > div.tabbertab.tabbertabdefault > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > b

  Tempo 31-45, innerHTML

  Gols pro, 31-45, innerHTML

  Gols contra, 31-45, innerHTML


  //clicar em 'Home'
  esperar pela tabela carregar
  
  //pegar dados

  //clicar em 'Away'

  //pegar dados

  */

}

async function scrapCorner(link_time,time1,time2) {
  const browser = await puppeterr.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link_time);
  
  await page.waitForSelector('#highcharts-0 > svg');

  const receInfos = await page.evaluate( () => {
    //time1
    var recebeCornerPro1 = [], tempo1 = [];
    var recebeCornerContra1 = [];

    //time2
    var recebeCornerPro2 = [], tempo2 = [];
    var recebeCornerContra2 = [];

    var timeCasa = [], timeVisitante = [];

    for ( var i = 1; i<=18; i++ ){
      //TIME CASA
      //tempo
      tempo1.push(document.querySelector(`#highcharts-0 > svg > g.highcharts-axis-labels.highcharts-xaxis-labels > text:nth-child(${i})`).innerHTML);
      //+e-
      recebeCornerPro1.push(document.querySelector(`#highcharts-0 > svg > g.highcharts-series-group > g:nth-child(5) > rect:nth-child(${i})`).attributes['height'].value)
      recebeCornerContra1.push(document.querySelector(`#highcharts-0 > svg > g.highcharts-series-group > g:nth-child(7) > rect:nth-child(${i})`).attributes['height'].value)

      //TIME VISITANTE
      //tempo
      tempo2.push(document.querySelector(`#highcharts-2 > svg > g.highcharts-axis-labels.highcharts-xaxis-labels > text:nth-child(${i})`).innerHTML);
      //+e-
      recebeCornerPro2.push(document.querySelector(`#highcharts-2 > svg > g.highcharts-series-group > g:nth-child(5) > rect:nth-child(${i})`).attributes['height'].value)
      recebeCornerContra2.push(document.querySelector(`#highcharts-2 > svg > g.highcharts-series-group > g:nth-child(7) > rect:nth-child(${i})`).attributes['height'].value)
    }

    for( var i in tempo1 ){
      timeCasa.push(tempo1[i]);
      timeCasa.push(recebeCornerPro1[i]);
      timeCasa.push(recebeCornerContra1[i]);

      timeVisitante.push(tempo2[i]);
      timeVisitante.push(recebeCornerPro2[i]);
      timeVisitante.push(recebeCornerContra2[i]);
    }

    
    //console.log(timeCasa, 'scrap');
    const exp = {
      timeCasa,
      timeVisitante
    }
    
    return {
      timeCasa,
      timeVisitante
    }
    console.log('asdasdsadasdasdsad');
  }
);
  const expor = {
    time1,
    time2,
    receInfos
  }
  await browser.close();
  return(expor);

}


module.exports = { getLink, resolveLinkCorner, scrapStats, scrapCorner}