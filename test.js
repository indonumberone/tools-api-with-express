//import puppeteer from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

// export const test = async (link, output) => {
//   // puppeteer.use(StealthPlugin());
//   // const browser = await puppeteer.launch({headless: false});
//   // const page = await browser.newPage();
//   // await page.goto('https://casa.tribone.my.id/#/');
//   // await page.waitForSelector(
//   //   '#login-page > div > span > span:nth-child(1) > div > div > input',
//   // );
//   // await page.type(
//   //   '#login-page > div > span > span:nth-child(1) > div > div > input',
//   //   'chitanda',
//   // );
//   // await page.type(
//   //   '#login-page > div > span > span:nth-child(2) > div > div > input',
//   //   'w3madefor2',
//   // );
//   // console.log('done');
//   // await page.waitForSelector('#login-page > div > span > button > span');
//   // // await page.waitForTimeout(4000);
//   // await page.click('#login-page > div > span > button');
//   // console.log('masuk');
//   // // await page.$eval('#login-page > div > span > button', (el) => el.click());
//   // await page.waitForSelector(
//   //   '#app-Files > div > div.cards-content > div > div.tooltip-trigger > div > div',
//   // );
//   // await page.click(
//   //   '#app-Files > div > div.cards-content > div > div.tooltip-trigger > div > div',
//   // );
//   // console.log('done klik menu');
//   // await page.waitForSelector(
//   //   '#app > div.out-container > div.modal.is-active.is-full-screen.file-panel > div.animation-content > div > div > section > div.content.is-flex-grow-1 > div > div.tool-bar.is-flex.mb-2.mt-2.is-flex-shrink-0 > div.view-btns.is-flex-shrink-0 > div > div.tooltip-trigger > p > span > i:not([disabled]',
//   // );
//   // await page.click(
//   //   '#app > div.out-container > div.modal.is-active.is-full-screen.file-panel > div.animation-content > div > div > section > div.content.is-flex-grow-1 > div > div.tool-bar.is-flex.mb-2.mt-2.is-flex-shrink-0 > div.view-btns.is-flex-shrink-0 > div > div.tooltip-trigger > p > span > i:not([disabled]',
//   // );
//   // const accessToken = await page.evaluate(() => {
//   //   return localStorage.getItem('access_token');
//   // });
//   // console.log(accessToken);
//   // await page.close();
//   // if (accessToken) {
//   //   const upload = axios.post(
//   //     'https://casa.tribone.my.id/v2/casaos/file/upload',
//   //     data,
//   //   );
//   // } else {
//   //   console.log('accsess token gagal di ambil');
//   // }
// };

// console.log(await test());
