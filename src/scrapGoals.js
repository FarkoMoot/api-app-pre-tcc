const puppeteer = require('puppeteer')

async function getGoals(link){
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link);

  await page.waitForSelector('#sheets-viewport > div:nth-child(1) > div > table > tbody > tr:nth-child(14)'); 

  const recebeHere = await page.evaluate(() => {
    return {
      over1_5: document.querySelector('#sheets-viewport > div:nth-child(1) > div > table > tbody > tr:nth-child(14) > td:nth-child(9)').innerHTML,
      over2_5: document.querySelector('#sheets-viewport > div:nth-child(1) > div > table > tbody > tr:nth-child(15) > td:nth-child(9)').innerHTML,
      btts: document.querySelector('#sheets-viewport > div:nth-child(1) > div > table > tbody > tr:nth-child(20) > td:nth-child(9)').innerHTML
      //numGol2: document.querySelector('#content > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2)').innerHTML
      //numGol3: document.querySelector('#content > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2)').innerHTML
    }
  }) 

  console.log(recebeHere)
  return recebeHere
  //6x
  //#goals-10-15-1 > div:nth-child(1) > div > div.mt10 > div:nth-child(1) > div.w60.m0Auto.heatmap_gradient.hover-modal-parent > div > span
  //#goals-10-15-1 > div:nth-child(1) > div > div.mt10 > div:nth-child(2) > div.w60.m0Auto.heatmap_gradient.hover-modal-parent > div > span

}

async function getGoals2(link, time){
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link);

  await page.waitForSelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(1) > td.bold > div'); 
  
  const recebeGOLS = await page.evaluate(() => {
    return {
      tempo1_15: document.querySelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(1) > td.bold ').textContent,
      tempo15_30: document.querySelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td.bold').textContent,
      tempo30_45: document.querySelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(3) > td.bold').textContent,
      tempo45_60: document.querySelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td.bold').textContent,
      tempo60_75: document.querySelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(5) > td.bold').textContent,
      tempo75_90: document.querySelector('#contentleft > div.half2 > div:nth-child(4) > table > tbody > tr:nth-child(6) > td.bold').textContent,
      gol_off_65: document.querySelector('#contentleft > div.half > div.table2.table3.table5 > table > tbody:nth-child(2) > tr:nth-child(1) > td.bold > div').innerHTML,
      over_2_gols: document.querySelector('#contentleft > div.half > div:nth-child(2) > table > tbody > tr:nth-child(1) > td.bold > div').innerHTML,
    }
  }) 

  return {time,recebeGOLS}
}


async function lastMatchs(link, time){
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link);

  await page.waitForSelector('#statisticsBox_6 > table > tbody');

  const recebeHere = await page.evaluate(() => {
    return {
      lastGame1: document.querySelector('#statisticsBox_6 > table > tbody > tr:nth-child(2) > td.boxIcon > span').classList[1],
      lastGame2: document.querySelector('#statisticsBox_6 > table > tbody > tr:nth-child(3) > td.boxIcon > span').classList[1],
      lastGame3: document.querySelector('#statisticsBox_6 > table > tbody > tr:nth-child(4) > td.boxIcon > span').classList[1],
      lastGame4: document.querySelector('#statisticsBox_6 > table > tbody > tr:nth-child(5) > td.boxIcon > span').classList[1],
      lastGame5: document.querySelector('#statisticsBox_6 > table > tbody > tr:nth-child(6) > td.boxIcon > span').classList[1]
    }
  })
  
  //console.log(recebeHere.numGol1)
  
  await page.close();
  return {
    recebeHere
  }
}

module.exports = { getGoals, getGoals2, lastMatchs }
