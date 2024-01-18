import {Router} from 'express';
import {
  listBank,
  listEwallet,
  bank,
  ewallet,
  serverTiktok1,
} from './handler.js';

const routers = Router();
routers.get('/listbank', listBank);
routers.get('/listewallet', listEwallet);
routers.get('/ewallet', ewallet);
routers.get('/bank', bank);
routers.get('/servertiktok1', serverTiktok1);

export default routers;
