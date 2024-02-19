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
  // console.log(dataLogin);
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

export const uploadcasa = async (file, fileName, fileSize) => {
  const accessToken = await login();
  // console.log(accessToken);
  if (accessToken) {
    try {
      const filePath = path.resolve(file);
      const fileStream = fs.createReadStream(filePath);
      const pathcasa = encodeURIComponent('/DATA/upload/' + fileName);
      // console.log(pathcasa);
      const formData = new FormData();
      formData.append('chunkNumber', 1);
      formData.append('chunkSize', 10000000);
      formData.append('currentChunkSize', 10000);
      formData.append('totalSize', fileSize);
      formData.append('relativePath', fileName);
      formData.append('totalChunks', 1);
      formData.append('path', '/DATA/upload');
      formData.append('file', fileStream);
      // console.log(formData);
      await axios.post(
        'https://casa.tribone.my.id/v2/casaos/file/upload',
        formData,
        {
          headers: {
            Authorization: accessToken,
            ...formData.getHeaders(),
          },
        },
      );
      const linkDownload = await axios.get(
        'https://casa.tribone.my.id/v3/file?token=' +
          accessToken +
          '&path=' +
          pathcasa,
      );
      // console.log(linkDownload);
      return {
        link:
          'https://casa.tribone.my.id/v3/file?token=' +
          accessToken +
          '&path=' +
          pathcasa,
        image: linkDownload.data,
      };
    } catch (error) {
      console.log(error, 'errorr');
      throw error;
    }
  } else {
    console.log('accessToken gagal diambil');
    throw new Error('Failed to get access token');
  }
};
// await upload('back.png');
