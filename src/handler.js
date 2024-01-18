import axios from 'axios';

export const listBank = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://api-rekening.lfourr.com/listBank',
    );
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
export const bank = async (req, res, next) => {
  if (!req.query.namalayanan)
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan parameter nama layanan',
    });
  if (!req.query.norek)
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan parameter nomor rekening',
    });
  try {
    const response = await axios.get(
      `https://api-rekening.lfourr.com/getBankAccount?bankCode=${req.query.namalayanan}&accountNumber=${req.query.norek}`,
    );
    const statusresponse = response.data.status;
    console.log(response.data);
    let responses;

    if (!statusresponse) {
      responses = res.status(400).send({
        status: 'fail',
        message: response.data.msg,
      });
    } else {
      responses = res.status(200).send({
        status: 'sukses',
        message: 'data berhasil di ambil dari server',
        data: {
          bankcode: response.data.data.bankcode,
          bankname: response.data.data.bankname,
          accountnumber: response.data.data.accountnumber,
          accountname: response.data.data.accountname,
        },
      });
    }

    return responses;
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
export const listEwallet = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://api-rekening.lfourr.com/listEwallet',
    );
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
export const ewallet = async (req, res, next) => {
  if (!req.query.namalayanan)
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan parameter nama layanan',
    });
  if (!req.query.norek)
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan parameter nomor rekening',
    });
  try {
    const response = await axios.get(
      `https://api-rekening.lfourr.com/getEwalletAccount?bankCode=${req.query.namalayanan}&accountNumber=${req.query.norek}`,
    );
    const statusresponse = response.data.status;
    console.log(response.data);
    let responses;

    if (!statusresponse) {
      responses = res.status(400).send({
        status: 'fail',
        message: response.data.msg,
      });
    } else {
      responses = res.status(200).send({
        status: 'sukses',
        message: 'data berhasil di ambil dari server',
        data: {
          ewallet_name: response.data.data.bankcode,
          accountnumber: response.data.data.accountnumber,
          accountname: response.data.data.accountname,
        },
      });
    }
    return responses;
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
