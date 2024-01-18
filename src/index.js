import express from 'express';
import routers from './routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json(), cors());
app.use(routers);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
