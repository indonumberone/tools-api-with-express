import puppeteer from 'puppeteer';

export const instagram = async (link, output) => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://snapinsta.app/id');
  await page.waitForSelector('#url');
  await page.type('#url', link);
  await page.click('#downloader > form > button');
  await page.waitForSelector('#download > div.row');
  let linki = await page.$$eval('img', (el) => el.map((img) => img.src));
  let linkii = await page.$$eval('a', (el) => el.map((a) => a.href));
  console.log(linki);
};

instagram(
  'https://www.instagram.com/p/C2cO8h5SS_T/?utm_source=ig_web_copy_link',
);
