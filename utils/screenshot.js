import puppeteer from 'puppeteer';

export const screenshot = async (link, output) => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  page.setViewport({
    height: 1080,
    width: 1920,
    deviceScaleFactor: 1,
  });
  await page.goto(link);
  await page.screenshot({path: output, fullPage: true});
  await browser.close();
  return output;
};
