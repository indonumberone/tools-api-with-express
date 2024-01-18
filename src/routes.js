import {Router} from 'express';
import {listBank} from './handler.js';

const routers = Router();
routers.get('/listbank', listBank);

export default routers;
