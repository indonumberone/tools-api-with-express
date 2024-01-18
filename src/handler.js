import axios from 'axios';
import tiktok from '../utils/tiktok.js';

export const listBank = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://api-rekening.lfourr.com/listBank',
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
        by: 'tribone',
        message: 'data berhasil diambil dari server',
        data: response.data.data.map((value) => ({
          bankcode: value.kodeBank,
          bankname: value.namaBank,
        })),
      });

      return responses;
    }
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
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
        by: 'tribone',
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
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
  }
};
export const listEwallet = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://api-rekening.lfourr.com/listEwallet',
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
        by: 'tribone',
        message: 'data berhasil diambil dari server',
        data: response.data.data.map((value) => ({
          ewallet_code: value.kodeBank,
          ewallet_name: value.namaBank,
        })),
      });

      return responses;
    }
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
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
        by: 'tribone',
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
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
  }
};

export const serverTiktok1 = async (req, res, next) => {
  if (!req.query.url) {
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan url tiktok',
    });
  }
  try {
    const response = await axios.get(
      'https://vihangayt.me/download/tiktok?url=' + req.query.url,
    );
    console.log(response.data);
    const statusresponse = response.data.status;
    console.log(response.data);
    let responses;

    if (!statusresponse) {
      responses = res.status(400).send({
        status: 'fail',
        message: response.data.err,
      });
    } else {
      responses = res.status(200).send({
        status: 'sukses',
        by: 'tribone',
        message: response.data.data.mess,
        data: {
          author: response.data.data.author,
          desc: response.data.data.desc,
          cover: response.data.data.cover,
          url: response.data.data.links[0].a,
        },
      });
    }
    return responses;
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
  }
};
export const serverTiktok2 = async (req, res, next) => {
  if (!req.query.url) {
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan url tiktok',
    });
  }
  try {
    const response = await axios.get(
      'https://rest-api.akuari.my.id/downloader/tiktok2?link=' + req.query.url,
    );
    console.log(response.data);
    const statusresponse = response.data.respon;
    //   console.log(response.data);
    let responses;

    if (!statusresponse) {
      responses = res.status(400).send({
        status: 'fail',
        message: 'masukan url yang valid',
      });
    } else {
      responses = res.status(200).send({
        status: 'sukses',
        by: 'tribone',
        message: '',
        data: {
          author: response.data.respon.author.unique_id,
          desc: response.data.respon.title,
          cover: response.data.respon.origin_cover,
          url: response.data.respon.hdplay,
        },
      });
    }
    return responses;
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
  }
};
export const serverTiktok3 = async (req, res, next) => {
  if (!req.query.url) {
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal masukan url tiktok',
    });
  }
  try {
    const response = await tiktok(req.query.url);

    if (!response) {
      return res.status(404).send({
        status: 'fail',
        message: 'Gagal!!! masukan url tiktok yang benar',
      });
    } else {
      res.status(200).send({
        status: 'sukses',
        by: 'tribone',
        message: '',
        data: {
          author: response.author.unique_id,
          url: response.video.no_watermark_hd,
        },
      });
    }
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
  }
};
export const template = async (req, res, next) => {
  try {
    const response = await axios.get('link');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching list of banks:', error.message);
    res.status(500).send({status: 'Error', message: 'Internal Server Error'});
  }
};
