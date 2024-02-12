import axios from 'axios';
import path from 'path';
import fs from 'fs';
import FormData from 'form-data';
import 'dotenv/config';

export const login = async () => {
  const dataLogin = {
    username: process.env.USERNAME_CASA,
    password: process.env.PASSWORD,
  };
  console.log(dataLogin);
  try {
    const accessToken = await axios.post(
      'https://casa.tribone.my.id/v1/users/login',
      dataLogin,
    );
    return accessToken.data.data.token.access_token;
  } catch (error) {
    console.error(error);
  }
};

export const upload = async (file) => {
  const accessToken = await login();
  console.log(accessToken);
  if (accessToken) {
    try {
      const filePath = path.resolve(file);
      const fileStream = fs.createReadStream(filePath);
      const name = path.basename(filePath);
      const formData = new FormData();
      formData.append('chunkNumber', 1);
      formData.append('chunkSize', 10000000);
      formData.append('currentChunkSize', 10000);
      formData.append('totalSize', fs.statSync(filePath).size);
      formData.append('relativePath', name);
      formData.append('totalChunks', 1);
      formData.append('path', '/DATA/test');
      formData.append('file', fileStream);
      console.log(formData);
      const response = await axios.post(
        'https://casa.tribone.my.id/v2/casaos/file/upload',
        formData,
        {
          headers: {
            Authorization: accessToken,
            ...formData.getHeaders(),
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.log(error, 'errorr');
    }
  } else {
    console.log('accessToken gagal di ambil');
  }
};
// await upload('back.png');
