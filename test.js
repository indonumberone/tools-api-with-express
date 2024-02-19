import axios from 'axios';
import cheerio from 'cheerio';
import pretty from 'pretty';

const prabowo = async () => {
  const response = await axios.get('https://news.detik.com/pemilu/quickcount');
  // console.log(response.data);
  const $ = cheerio.load(response.data);
  console.log(
    $(
      '#pilpres > div > div.table-survei-wrap.data-survei.mgb-24 > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    ),
  );
  // const prabowoPercentage = $(
  //   'body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-hierarchy > div > table > tfoot > tr > th:nth-child(3) > app-percent > span:nth-child(1)',
  // ).text();
  // console.log;
  // return prabowoPercentage;
};

// Contoh pemanggilan fungsi
prabowo()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
