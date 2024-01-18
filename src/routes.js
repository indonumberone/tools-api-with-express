import {Router} from 'express';
import {listBank, listEwallet, bank, ewallet} from './handler.js';

const routers = Router();
routers.get('/listbank', listBank);
routers.get('/listewallet', listEwallet);
routers.get('/ewallet', ewallet);
routers.get('/bank', bank);

export default routers;
