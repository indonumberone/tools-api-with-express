import * as cheerio from 'cheerio';
import request from 'request-promise';
import moment from 'moment';

export default async function trendsX() {
  const htmlResult = await request.get('https://trends24.in/indonesia');
  const $ = cheerio.load(htmlResult);
  const trends = [];
  $('.trend-card').each((index, el) => {
    let datetime = $(el).find('.trend-card__time').text();
    let time = moment(datetime, 'DD-MM-YYYY - HH:mm:ss').fromNow();
    let temp = [];
    $(el)
      .find('.trend-card__list')
      .find('li')
      .each((key, el) => {
        let name = $(el).find('a').text();
        let tweet_count = $(el).find('.tweet-count').text();
        temp.push({name, tweet_count});
        trends[index] = {
          datetime,
          time,
          data: temp,
        };
      });
  });
  return trends;
}
