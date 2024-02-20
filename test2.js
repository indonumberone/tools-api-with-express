import puppeteer from 'puppeteer-core';
import 'dotenv/config';

const prabowo = async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: process.env.PATH_CHROME,
  });
  const page = await browser.newPage();
  await page.goto('https://ethol.pens.ac.id/');
  await page.waitForSelector(
    '#box-card-services > div > div:nth-child(6) > div > div > div > div.col-sm-12.col-md-9.col-12 > h2',
  );
  const prabowo = await page.$eval(
    '#box-card-services > div > div:nth-child(6) > div > div > div > div.col-sm-12.col-md-9.col-12 > h2',
    (element) => {
      return element.textContent;
    },
  );
  await page.close();
  return prabowo;
};
console.log(await prabowo());
