import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
// const test = async () => {
//   try {
//     const response = await axios.get("https://api-rekening.lfourr.com/listBank");
//   } catch (error) {}
// };

// test();
const app = express();
const port = 3000;

app.use(bodyParser.json(), cors());

// app.get('/listbank', async (req, res) => {
//   const response = await axios.get('https://api-rekening.lfourr.com/listBank');
//   res.send(response.data);
// });
// app.get('/listwallet', async (req, res) => {
//   const response = await axios.get(
//     'https://api-rekening.lfourr.com/listEwallet',
//   );
//   res.send(response.data);
// });
// app.get('/bank', async (req, res) => {
//   const response = await axios.get(
//     `https://api-rekening.lfourr.com/getBankAccount?bankCode=${req.query.namalayanan}&accountNumber=${req.query.norek}`,
//   );
//   res.send(response.data);
//   console.log(req.query.namalayanan, req.query.norek, response.data);
// });
// app.get('/wallet', async (req, res) => {
//   const response = await axios.get(
//     `https://api-rekening.lfourr.com/getEwalletAccount?bankCode=${req.query.namalayanan}&accountNumber=${req.query.norek}`,
//   );
//   res.send(response.data);
//   console.log(req.query.namalayanan, req.query.norek, response.data);
// });
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});

app.get('/about', async (req, res) => {
  let anuarray = [];
  for (let i = 2423600031; i <= 2423600060; i++) {
    if (
      i !== 2423600039 &&
      i !== 2423600046 &&
      i !== 2423600051 &&
      i !== 2423600052 &&
      i !== 2423600054 &&
      i !== 2423600057 &&
      i !== 2423600059
    ) {
      let response = await axios.get(
        `https://api-frontend.kemdikbud.go.id/hit_mhs/${i}`,
      );
      let nama;

      const data = response.data.mahasiswa[0].text.split(',');
      nama = data[0].replace(/\s*\(.*?\)\s*/g, '');
      anuarray.push(nama);
      //   console.log(anuarray);
    }
  }
  res.send(anuarray);
});
