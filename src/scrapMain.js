const puppeteer = require('puppeteer');

const BASE_URL = "https://www.soccerstats.com/latest.asp?league=brazil"


async function scrapNumJogos() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(BASE_URL);
  await page.waitForSelector('#btable');
  console.log('Entrou no Scrap que busca o numero de JOGOs');
  const infoPreScraping = await page.evaluate( () => {
    return {
      //pega o numero de children do table que estao os jogos
      numJogos: document.querySelectorAll('#btable').item(7).querySelector('tbody').childElementCount,
    }
  }); 
  
  //console.log(infoPreScraping.numJogos);
  await browser.close();
  return infoPreScraping.numJogos;

}

async function scrapingSoccerStats_1() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);
  
  await page.waitForSelector('#btable');
  console.log("entrou no Scrap que busca as INFOS de CADA jogo - JOGO 1:");
  const infosPage = await page.evaluate( () => {
    
    var text1 = 'tbody > tr:nth-child(' + 2 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 2 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 2 + ') > td:nth-child(4) > a';
    
    return {
      //pegar o numero de filhos da tabela e rodar um for pra pegar a lista de jogos por inteira
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
      /*
      seletor pre-jogo
      tbody > tr:nth-child(2) > td:nth-child(3) > a > div > font

      seletor in-live ???

      seletor pos-jogo
      tbody > tr:nth-child(2) > td:nth-child(3) > a > font > b
      */
    }
  });

  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }

  //criar objeto pra receber os valores do scraping 
  //passar o objeto pra API
  //escrever o ou OS objetos no DB

  //activity indicator na tela inicial e na tela de tabela do app

  //colocar pra escrever direto no DB ATLAS\
  console.log("Valores que recebemos do scrap",infosPage);  
  console.log("Valores que vao sair do Scrap(RETURN)",expor);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  //await writeDB(textExit);
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_2() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 3 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 3 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 3 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_3() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 4 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 4 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 4 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_4() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 5 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 5 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 5 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_5() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 6 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 6 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 6 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_6() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 7 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 7 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 7 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_7() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 8 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 8 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 8 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

async function scrapingSoccerStats_8() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page =  await browser.newPage();
  await page.goto(BASE_URL);

  await page.waitForSelector('#btable');

  const infosPage = await page.evaluate( () => {
    console.log('66');
    var text1 = 'tbody > tr:nth-child(' + 9 + ') > td:nth-child(3) > a > div > font';
    var text2 = 'tbody > tr:nth-child(' + 9 + ') > td:nth-child(2) > a';
    var text3 = 'tbody > tr:nth-child(' + 9 + ') > td:nth-child(4) > a';
    console.log('6');
    return {
      item1: document.querySelectorAll('#btable').item(7).querySelector(text1).innerHTML,         
      item2: document.querySelectorAll('#btable').item(7).querySelector(text2).innerHTML,         
      item3: document.querySelectorAll('#btable').item(7).querySelector(text3).innerHTML,
    }
  });
  const { item1 , item2, item3 } = infosPage
  const expor = {
    item1,
    item2,
    item3
  }
  console.log(infosPage);  
  const textExit = '{ "item1": "' + infosPage.item1 + '", "item2": "' + infosPage.item2 + '", "item3": "'+ infosPage.item3 + '" },'
  await browser.close();
  return expor;
}

module.exports = {
  scrapNumJogos,
  scrapingSoccerStats_1,
  scrapingSoccerStats_2,
  scrapingSoccerStats_3,
  scrapingSoccerStats_4,
  scrapingSoccerStats_5,
  scrapingSoccerStats_6,
  scrapingSoccerStats_7,
  scrapingSoccerStats_8,
};