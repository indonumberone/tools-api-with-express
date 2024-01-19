import express from 'express';
import routers from './routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();
export const port = 3000;
export let hitRequest = 0;

app.use(bodyParser.json(), cors());
app.get('/', async (req, res) => {
  res.status(200).send('total hit request ' + hitRequest);
});
app.use((req, res, next) => {
  hitRequest++;
  next();
});
app.use(routers);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
