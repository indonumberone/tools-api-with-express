import {Router} from 'express';
import multer from 'multer';
import {
  listBank,
  listEwallet,
  bank,
  ewallet,
  serverTiktok1,
  serverTiktok2,
  serverTiktok3,
  serverIg1,
  quick1,
  screenshotapi,
  trendx,
  casaupload,
} from './handler.js';

const routers = Router();
const upload = multer({dest: 'tmp'});
routers.get('/listbank', listBank);
routers.get('/listewallet', listEwallet);
routers.get('/ewallet', ewallet);
routers.get('/bank', bank);
routers.get('/servertiktok1', serverTiktok1);
routers.get('/servertiktok2', serverTiktok2);
routers.get('/servertiktok3', serverTiktok3);
routers.get('/serverig', serverIg1);
routers.get('/screenshot', screenshotapi);
routers.get('/quick1', quick1);
routers.get('/trendsx', trendx);
routers.post('/uploadcasa', upload.single('file'), casaupload);

export default routers;
