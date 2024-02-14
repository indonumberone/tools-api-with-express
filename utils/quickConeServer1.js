//import puppeteer from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export const prabowo = async () => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  await page.goto('https://kawalpemilu.org/');
  await page.waitForSelector(
    'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(3) > app-percent > span:nth-child(1)',
  );
  const prabowo = await page.$eval(
    'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(3) > app-percent > span:nth-child(1)',
    (element) => {
      return element.textContent;
    },
  );
  await page.close();
  return prabowo;
};
export const anis = async () => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  await page.goto('https://kawalpemilu.org/');
  await page.waitForSelector(
    'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(3) > app-percent > span:nth-child(1)',
  );
  const anis = await page.$eval(
    'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(2) > app-percent > span:nth-child(1)',
    (element) => {
      return element.textContent;
    },
  );
  await page.close();
  return anis;
};
export const ganjar = async () => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  await page.goto('https://kawalpemilu.org/');
  await page.waitForSelector(
    'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(3) > app-percent > span:nth-child(1)',
  );
  const ganjar = await page.$eval(
    'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(4) > app-percent > span:nth-child(1)',
    (element) => {
      return element.textContent;
    },
  );
  await page.close();
  return ganjar;
};

// console.log(await prabowo());
// console.log(await anis());
// console.log(await ganjar());
