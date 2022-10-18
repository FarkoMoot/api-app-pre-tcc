const puppeteer = require('puppeteer')

async function getGoals(link, time1, time2){
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(link);

  await page.waitForSelector('#club-w11 > div.w96.cf.m0Auto > div > div.h2h-tabbed-headers.row.cf > div.header-title.ui-toggle-link-local.ac.w33.fl.active');

  await page.click('#club-w11 > div.w96.cf.m0Auto > div > div.h2h-tabbed-headers.row.cf > div.header-title.ui-toggle-link-local.ac.w33.fl.active');

  const recebeHere = await page.evaluate(() => {
    return {
      numGol1: document.querySelector('#goals-10-15-1 > div:nth-child(1) > div > div.mt10 > div:nth-child(1) > div.w60.m0Auto.heatmap_gradient.hover-modal-parent > div > span').innerHTML
    }
  }) 

  console.log(recebeHere.numGol1)

  //6x
  //#goals-10-15-1 > div:nth-child(1) > div > div.mt10 > div:nth-child(1) > div.w60.m0Auto.heatmap_gradient.hover-modal-parent > div > span
  //#goals-10-15-1 > div:nth-child(1) > div > div.mt10 > div:nth-child(2) > div.w60.m0Auto.heatmap_gradient.hover-modal-parent > div > span

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

module.exports = { getGoals, lastMatchs }
