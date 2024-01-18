import {Router} from 'express';
import {
  listBank,
  listEwallet,
  bank,
  ewallet,
  serverTiktok1,
  serverTiktok2,
  serverTiktok3,
} from './handler.js';

const routers = Router();
routers.get('/listbank', listBank);
routers.get('/listewallet', listEwallet);
routers.get('/ewallet', ewallet);
routers.get('/bank', bank);
routers.get('/servertiktok1', serverTiktok1);
routers.get('/servertiktok2', serverTiktok2);
routers.get('/servertiktok3', serverTiktok3);

export default routers;
